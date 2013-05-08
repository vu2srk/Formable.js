Formable = (function(window){
	
	function Formable(){
		this.forms = {};
		this.formCount = 0;
	}
	
	Formable.prototype = {
		creatForm : function(name, title, hook){
			this.formCount++;
			this.forms[name] = new Form(name, title, hook, formCount);
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
		
	};
	
	return Formable;
});
