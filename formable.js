(function(window){
	
	function Formable(){
		this.forms = {};
		this.formCount = 0;
		this.window = window;
	}
	
	Formable.prototype = {
		createForm : function(name, title, hook){
			this.formCount++;
			this.forms[name] = new Form(name, title, hook, this.formCount);
			var html = this.forms[name].getHtml();
			this.window.document.getElementById(hook).innerHTML = html;
		}
	};
	
	function Form(name, title, hook, id){
		this.hook = hook || window;
		this.name = name;
		this.title = title || "Unnamed";
		this.id = id;
		this.class = "form-default";
	}
	
	Form.prototype = {
		getHtml : function(){
			var html = "<form class='" + this.class +"' >";
			html += "</form>";
			return html;
		}
	};
	
	window.Formable = Formable;
	
})(window);
