GREEN   = \033[32m
YELLOW  = \033[38;5;226m
NOCOLOR = \033[39;0m

.PHONY: default
default: e

.PHONY: d
d:
	@echo "$(YELLOW) Cleaning build folder... $(NOCOLOR)"
	@ti clean -q
	@echo "$(YELLOW) Building and deploying... $(NOCOLOR)"
	@ti build -p android -T device

.PHONY: e
e:
	@echo "$(YELLOW) Cleaning build folder... $(NOCOLOR)"
	@ti clean -q
	@echo "$(YELLOW) Building and deploying... $(NOCOLOR)"
	@ti build -p android --device-id