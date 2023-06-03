class Controls {
	constructor(controlType) {
		this.forward = false;
		this.reverse = false;
		this.left = false;
		this.right = false;
		switch (controlType) {
			case "KEYS":
				this.#addKeyBoardListeners();
				break;
			case "DUMMY":
				this.forward = true;
				break;
		}
	}
	#addKeyBoardListeners() {
		document.onkeydown = (e) => {
			if (e.defaultPrevented) {
				return; // Do nothing if the event was already processed
			}
			switch (e.key) {
				case "ArrowLeft":
					this.left = true;
					break;
				case "ArrowRight":
					this.right = true;
					break;
				case "ArrowUp":
					this.forward = true;
					break;
				case "ArrowDown":
					this.reverse = true;
					break;
			}
			e.preventDefault();
			// console.table(this);
		};
		document.onkeyup = (e) => {
			if (e.defaultPrevented) {
				return; // Do nothing if the event was already processed
			}
			switch (e.key) {
				case "ArrowLeft":
					this.left = false;
					break;
				case "ArrowRight":
					this.right = false;
					break;
				case "ArrowUp":
					this.forward = false;
					break;
				case "ArrowDown":
					this.reverse = false;
					break;
			}
			e.preventDefault();
			// console.table(this);
		};
	}
}
