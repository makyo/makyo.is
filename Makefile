.PHONY: all
all: is.svg is.png is.json 

is.svg: is.dot
	twopi -Tsvg is.dot -o is.svg

is.png: is.dot
	twopi -Tpng is.dot -o is.png

is.json: is.dot
	twopi -Tjson is.dot -o is.json
