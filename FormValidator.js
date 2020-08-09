class FormValidator {

	static isValidEmail(string) {
		let email_regex = /^([^"()])+(\@)[a-z]+(\.)[a-z]+$/i;
		return email_regex.test(string) ? true : false;
	}
	static isValidFullname(string) {
		let fullname_regex = /^([a-z] ){2,}$/i;
		return fullname_regex.test(string) ? true : false;
	}
}
console.log(
FormValidator.isValidFullname('chidiebereekenni dwd')
)