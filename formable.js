(function(window) {

	var Formable = function() {
		this.forms = {};
		this.formCount = 0;
		this.window = window;
	};

	Formable.prototype = {
		createForm : function(name, title, hook) {
			this.formCount++;
			var form = new Form(name, title, hook || this.window, this.formCount);
			this.forms[name] = form;
			$(hook).append(form.el);
			return form;
		}
	};

	var Form = function(name, title, hook, id) {
		this.hook = hook;
		this.name = name;
		this.title = title || "Unnamed";
		this.id = id;
		this.class = "form-default";
		this.el = this.__initEl__();
	};

	Form.prototype = {
		__initEl__ : function() {
			var el = jQuery("<form>").addClass(this.class);
			return el;
		},

		drawTitle : function(new_title) {
			var title = jQuery("<h4>");
			title.html(new_title || this.title);
			this.el.append(title);
		},

		addField : function(options) {
			var field = new Field(options);
			field.label && this.el.append(field.label);
			this.el.append(field.el);
			return field;
		}
	}

	var Field = function(options) {

		var field_options = {
			"field" : "input",
			"type" : "text",
			"label_type" : "placeholder",
			"field_class" : "input-default",
			"label_class" : "label-default"
		};

		for (var prop in field_options) {
			this[prop] = field_options[prop];
		}

		for (var prop in options) {
			this[prop] = options[prop];
		}

		this.el = this.__initEl__();
		this.label = this.setLabel(this.label_type, this.label_text || this.name);
	};

	Field.prototype = {
		__initEl__ : function() {
			var el = jQuery("<" + this.field + ">").attr("type", this.type).attr("name", this.name).addClass(this.field_class);
			return el;
		},

		setLabel : function(label_type, label_text) {
			if (label_type == "label") {
				var label = jQuery("<label>").attr("for", this.name).html(label_text).addClass(this.label_class);
				return label;
			} else {
				this.el.attr("placeholder", label_text);
			}
			return null;
		}
	}

	window.Formable = Formable;

})(window);
