all: clean install test

install: node_modules

node_modules:
	@npm install

test:
	@NODE_ENV=test node_modules/.bin/hydro

test-ci: test

clean:
	@rm -rf node_modules

.PHONY: test test-ci clean
