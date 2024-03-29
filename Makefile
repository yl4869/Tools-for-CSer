.PHONY: deploy
.PHONY: clean
.PHONY: build
.PHONY: commit

clean: 
	rm -rf book

deploy: book
	@echo "====> deploying to github"
	-mkdir /tmp/book
	git worktree prune
	-git worktree add /tmp/book gh-pages
	rm -rf /tmp/book/*
	cp -rp book/* /tmp/book/
	cd /tmp/book && \
	git add -A && \
	git commit -m "deployed on $(shell date) by ${USER}" && \
	git push origin gh-pages

build: src 
	mdbook build

commit:
	git add src Makefile README.md book.toml theme
	git commit -m "commit on $(shell date) by ${USER}, ${MESSAGE}" && \
	git push origin main

run:
	make build && make commit && make deploy

