run:
	DEBUG=swagger* node index.js

test:
	mocha

coverage:
	istanbul cover _mocha -- -R spec

.PHONY: run test clean coverage