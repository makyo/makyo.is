.PHONY: all
all: system.svg system.png

system.svg: system.dot
	twopi -Tsvg system.dot -o system.svg

system.png: system.dot
	twopi -Tpng system.dot -o system.png
