class FormValidator {
	static isValidEmail(string) {
		let email_regex = /^([^"()])+(\@)[a-z]+(\.)[a-z]+$/i;
		return email_regex.test(string) ? true : false;
	}
	static isValidFullname(string) {
		let fullname_regex = /^([a-z]{2,})+( ([a-z]{2,})+)+$/i;
		return fullname_regex.test(string) ? true : false;
	}
	static isValidUsername(string) {
		let username_regex = /(^[a-z]+(?=[\d])|[0-9]+(?=[a-z]))[a-z0-9]+$/i;
		return username_regex.test(string) ? true : false;
	}
	static isValidDate(string) {
		let date_regex = /^(([0-2][0-9])|(3[0-1]))\-((0[1-9])|(1[1-2]))\-[0-9]{4}$/;
		return date_regex.test(string) ? true : false;
	}
	static isValidWebsite(string) {
		let website_regex = /^(https?:\/\/)?(www\.)?[^\[\]\{\}\|\\”%~#<> .]+\.[a-z]+$/;
		return website_regex.test(string) ? true : false;
	}
}
