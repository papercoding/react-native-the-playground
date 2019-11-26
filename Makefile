
staging:
	ln -f .config/staging/.env .
	ln -f .config/staging/GoogleService-Info.plist ios
	ln -f .config/staging/google-services.json android/app

production:
	ln -f .config/production/.env .
	ln -f .config/production/GoogleService-Info.plist ios
	ln -f .config/production/google-services.json android/app


local:
	ln -f .config/local/.env .
	ln -f .config/local/GoogleService-Info.plist ios
	ln -f .config/local/google-services.json android/app