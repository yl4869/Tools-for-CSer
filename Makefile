.PHONY: deploy
.PHONY: clean
.PHONY: build
.PHONY: commit

clean: 
	rm -rf book

deploy: book
	@echo "====> deploying to github"
	git worktree add /tmp/book gh-pages
	rm -rf /tmp/book/*
	cp -rp book/* /tmp/book/
	cd /tmp/book && \
	git add -A && \
	git commit -m "deployed on $(shell date) by ${USER}" && \
	git push origin gh-pages

build: src 
	mdbook build

commit:
	git add src Makefile README.md
	git commit -m "commit on $(shell date) by ${USER}" && \
	git push origin main

