import { Component, ViewChild, ViewChildren, AfterViewInit, Directive, forwardRef } from "@angular/core";
import { NgForm, FormControl, NG_VALIDATORS,
    NG_ASYNC_VALIDATORS, FormGroup, AbstractControl,
    AsyncValidator, Validators, ValidationErrors, FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";

const phoneValidator = (c: FormControl) => {

    if (c.value == null || String(c.value).length === 0) {
        return null;
    }

    const phonePattern = "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$";
    const re = new RegExp(phonePattern);

    if (re.test(c.value)) {
        return null;
    } else {
        return {
            phone: true,
        };
    }
};

@Directive({
    selector: "input[type=tel][ngModel]",
    providers: [
        { provide: NG_VALIDATORS, useValue: phoneValidator, multi: true },
    ],
})
export class PhoneValidatorDirective { }

const preferredContactMethodValidator = (c: AbstractControl) => {

    const g = c as FormGroup;

    if (!g.controls.preferredContactMethodSelect) {
        return null;
    }

    switch (g.controls.preferredContactMethodSelect.value) {
        case "EMAIL":
            if (g.controls.emailInput.value == null || String(g.controls.emailInput.value).length === 0) {
                return {
                    preferredContactMethod: "EMAIL",
                } as ValidationErrors;
            }
        case "PHONE":
            if (g.controls.phoneInput.value == null || String(g.controls.phoneInput.value).length === 0) {
                return {
                    preferredContactMethod: "PHONE",
                } as ValidationErrors;
            }
            break;
    }

    return null;

};

@Directive({
    selector: "[ngModelGroup][preferred-contact-required]",
    providers: [
        { provide: NG_VALIDATORS, useValue: preferredContactMethodValidator, multi: true },
    ],
})
export class PreferredContactMethodValidatorDirective { }


const productSerialNumberValidatorFactory = (http: Http) => {

    return (c: AbstractControl) => {
        return new Promise( (resolve, reject) => {
            http.get(`http://localhost:3010/products/${encodeURIComponent(c.value)}`)
                .subscribe( () => resolve({}), () => resolve({ productSerialNumber: true }) );
        });
    };
};

// @Directive({
//     selector: "input[validate-serial-number]",
//     providers: [
//         {
//             provide: NG_ASYNC_VALIDATORS,
//             useFactory: productSerialNumberValidatorFactory,
//             deps: [ Http ],
//             multi: true,
//         },
//     ],
// })
// export class ProductSerialNumberValidatorDirective { }

@Directive({
    selector: "input[validate-serial-number]",
    providers: [ {
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => ProductSerialNumberValidatorDirective),
        multi: true,
    } ],
})
export class ProductSerialNumberValidatorDirective implements AsyncValidator {

    public validatorFn: (c: AbstractControl) => Promise<any>;

    constructor(private http: Http) {

        // this.validatorFn = (c: AbstractControl) => {
        //     return new Promise( (resolve, reject) => {
        //         this.http.get(`http://localhost:3010/products/${encodeURIComponent(c.value)}`)
        //             .subscribe( () => resolve({}), () => resolve({ productSerialNumber: true }) );
        //     });
        // };

        this.validatorFn = productSerialNumberValidatorFactory(this.http);

    }

    public validate(c: AbstractControl): Promise<any> {
        return this.validatorFn(c);
    }

}


@Component({
    selector: "main",
    template: `
        <form novalidate ngNoForm [formGroup]="personForm">
            <details *ngIf="personForm.invalid">
                <summary>There are errors in the person form.</summary>
                <ul>
                    <li *ngIf="personForm.controls.contactDetails.errors &&
                        personForm.controls.contactDetails.errors.preferredContactMethod === 'EMAIL'">
                        Please specify an email for your primary contact method.
                    </li>
                    <li *ngIf="personForm.controls.contactDetails.errors &&
                        personForm.controls.contactDetails.errors.preferredContactMethod === 'PHONE'">
                        Please specify an phone for your primary contact method.
                    </li>
                </ul>
            </details>
            <div>
                <label for="product-serial-number-input">Product Serial Number</label>
                <input type="text" id="product-serial-number-input" formControlName="serialNumberInput">
                <span class="valid-message">Validated</span>
                <span>Error</span>
            </div>
            <fieldset formGroupName="personName">
                <div>
                    <label for="first-name-input">First Name:</label>
                    <input type="text" id="first-name-input" formControlName="firstNameInput">
                    <span>First Name is required.</span>
                </div>
                <div>
                    <label for="last-name-input">Last Name:</label>
                    <input type="text" id="last-name-input" formControlName="lastNameInput">
                    <span>Last Name is required.</span>
                </div>
            </fieldset>
            <fieldset formGroupName="contactDetails">
                <div>
                    <label for="email-input">Email:</label>
                    <input type="email" id="email-input" formControlName="emailInput">
                    <span *ngIf="personForm.controls.contactDetails.controls.emailInput.invalid">
                        <span *ngIf="personForm.controls.contactDetails.controls.emailInput.errors.email">
                            Email is invalid.
                        </span>
                    </span>
                </div>
                <div>
                    <label for="phone-input">Phone:</label>
                    <input type="tel" id="phone-input" formControlName="phoneInput">
                    <span>Phone is invalid.</span>
                </div>
                <div class="center-me">
                    <label for="preferred-contact-method-select">
                        Preferred Contact Method:
                    </label>
                    <select id="preferred-contact-method-select" size="4"
                        formControlName="preferredContactMethodSelect">
                        <option *ngFor="let contactMethod of contactMethods" [value]="contactMethod.code">
                            {{contactMethod.caption}}
                        </option>
                    </select>
                    <span>Contact method is required.</span>
                </div>
            </fieldset>
            <div>
                <label for="comments-textarea">Comments</label>
                <textarea id="comments-textarea" formControlName="commentsTextarea"></textarea>
            </div>
            <button (click)="savePerson()">Save Person</button>
        </form>
    `,
    styles: [
        `input.ng-invalid.ng-touched:not(:focus),
         select.ng-invalid.ng-touched:not(:focus) {
            border: 2px solid red;
        }`,
        `input.ng-invalid.ng-touched ~ span:not(.valid-message),
         select.ng-invalid.ng-touched ~ span:not(.valid-message) {
             display:inline;
        }`,
        "input ~ span, select ~ span { display:none; }",
        "input.ng-valid.ng-touched ~ span.valid-message, { display:inline; }",
        // "select { vertical-align:top; }",
        ".center-me { display: flex; align-items:middle; }",
    ],
})
export class AppComponent implements AfterViewInit {

    // public personForm = new FormGroup({
    //     serialNumberInput: new FormControl(
    //         "",
    //         [ Validators.required, Validators.minLength(12) ],
    //         [ productSerialNumberValidatorFactory(this.http) ]),
    //     personName: new FormGroup({
    //         firstNameInput: new FormControl("", [ Validators.required ]),
    //         lastNameInput: new FormControl("", [ Validators.required ]),
    //     }),
    //     contactDetails: new FormGroup({
    //         emailInput: new FormControl("", [ Validators.email ]),
    //         phoneInput: new FormControl("", [ phoneValidator ]),
    //         preferredContactMethodSelect: new FormControl("", [ Validators.required ]),
    //     }, preferredContactMethodValidator),
    //     commentsTextarea: new FormControl(""),
    // });

    public personForm = this.fb.group({
        serialNumberInput: [
            "", [ Validators.required, Validators.minLength(12) ],
            [ productSerialNumberValidatorFactory(this.http) ],
        ],
        personName: this.fb.group({
            firstNameInput: [ "", [ Validators.required ] ],
            lastNameInput: [ "", [ Validators.required ] ],
        }),
        contactDetails: this.fb.group({
            emailInput: [ "", [ Validators.email ] ],
            phoneInput: [ "", [ phoneValidator ] ],
            preferredContactMethodSelect: [ "", [ Validators.required ] ],
        }, { validator: preferredContactMethodValidator }),
        commentsTextarea: [ "" ],
    });

    public person = {
        firstName: "",
        lastName: "",
    };

    public contactMethods = [
        { code: "EMAIL", caption: "Email" },
        { code: "PHONE", caption: "Phone" },
    ];

    constructor(private http: Http, private fb: FormBuilder) { }

    public ngAfterViewInit() {
        console.log(this.personForm);
    }

    public savePerson() {
        console.log(this.personForm.value);
    }
}
