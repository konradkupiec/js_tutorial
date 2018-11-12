function emailParts(email) {
	let processedContent = email.toLowerCase ();
	return processedContent.split('@')
}
console.log(emailParts[0]);
console.log(emailParts[1]);
