run:
	DEBUG=swagger* node index.js

test:
	LOG=error mocha

test_verbose:
	mocha

coverage:
	istanbul cover _mocha -- -R spec

.PHONY: run test test_verbose clean coverage