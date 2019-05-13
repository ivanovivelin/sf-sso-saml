module.exports = {
	development : {
		app : {
			name: 'https://ivelin-demo-developer-edition.eu19.force.com/service',
			port : process.env.PORT || 3000,
			backUrl: 'https://ivelin-demo-developer-edition.eu19.force.com/service'
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint: 'https://ivelin-demo-developer-edition.eu19.force.com/service/idp/endpoint/HttpRedirect',
				issuer: 'https://ivelin-demo-developer-edition.eu19.force.com/service',
				cert: 'MIIErDCCA5SgAwIBAgIOAWojTZmBAAAAAC75tsgwDQYJKoZIhvcNAQELBQAwgZAxKDAmBgNVBAMMH1NlbGZTaWduZWRDZXJ0XzE1QXByMjAxOV8yMzIwNDkxGDAWBgNVBAsMDzAwRDFpMDAwMDAwVVBGazEXMBUGA1UECgwOU2FsZXNmb3JjZS5jb20xFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xCzAJBgNVBAgMAkNBMQwwCgYDVQQGEwNVU0EwHhcNMTkwNDE1MjMyMDQ5WhcNMjAwNDE1MTIwMDAwWjCBkDEoMCYGA1UEAwwfU2VsZlNpZ25lZENlcnRfMTVBcHIyMDE5XzIzMjA0OTEYMBYGA1UECwwPMDBEMWkwMDAwMDBVUEZrMRcwFQYDVQQKDA5TYWxlc2ZvcmNlLmNvbTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzELMAkGA1UECAwCQ0ExDDAKBgNVBAYTA1VTQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAI4fUOneabsSzp2wEV7tW9E+78dLJ5hr9wh6cYJqlbFjBL6tJhGtgqViHPObiP4WxOvi0z8eG2Mqk2L68OWgBUMnMUwM+ugh+cPkc+HPmvkFk6LyQMobpkHXkPyAXpCbXEKMFngyaVYoZYw4/UHxcRUrQ2SqypUhygadkJ4jFl2YGGesbGTYhKhtXInZUXxxwZx7dWmTPq8mQSKY9jwTLiCFrjhu2m2W0wrAR8+dWJrAPGDj5ByGgQDadlTrqN8YkZirYejUGDENVB+R/97kr4tDgZwKEzI1NhIgylQSUKO6h2LxK3WekHg8tyrHvAeapS9a2Zx5GDflqqbMHQQP3NsCAwEAAaOCAQAwgf0wHQYDVR0OBBYEFN17vHZ8mWoxPgmRBPHKlnVydH7xMA8GA1UdEwEB/wQFMAMBAf8wgcoGA1UdIwSBwjCBv4AU3Xu8dnyZajE+CZEE8cqWdXJ0fvGhgZakgZMwgZAxKDAmBgNVBAMMH1NlbGZTaWduZWRDZXJ0XzE1QXByMjAxOV8yMzIwNDkxGDAWBgNVBAsMDzAwRDFpMDAwMDAwVVBGazEXMBUGA1UECgwOU2FsZXNmb3JjZS5jb20xFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xCzAJBgNVBAgMAkNBMQwwCgYDVQQGEwNVU0GCDgFqI02ZgQAAAAAu+bbIMA0GCSqGSIb3DQEBCwUAA4IBAQA28F+EkEviUp1HLw6D2nJv4Xe0PiF191ktPBvZ3+YGg5iGv2tDGJbE3AXyxoBoWPRXvHCK+mu9bagDXSC6JYO44Z5DJ5cVeOxB496arSWBsql8x3uvPyAVYY9OO4KtvKa+kYi8Nl6tyImkK9ljDIKHnaledPg1pyJpgIiH1Z7FJ2E/2iESIexCfy+VMP5BUjVwJZs4irttMWh4e+3S8OoBO6zwEeUPco6zLvc/Rr83m+r3duDVrT1K7yWeq/Eik9LA6SeU87Hxm/9Xwiftatn5xrjXLWdZMBWgyl4WNoV/JEr11gOxCq0EXEl3DipdSBEEX2Wnp8dIOWRhOAdfIpMx',
				identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
			}
		},
		register: {
			endpoint: ''
		}
	},
	production : {
		app : {
			name : process.env.APP_NAME,
			port : process.env.PORT || 3000,
			backUrl: process.env.SF_HOME,
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint: process.env.SAML_ENTRYPOINT,
				issuer : process.env.SAML_ISSUER,
				cert: process.env.SAML_CERT,
				identifierFormat: process.env.SAML_IDENTIFIER_FORMAT,
				
			}
		}
	}
}
