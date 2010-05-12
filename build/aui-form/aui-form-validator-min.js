AUI.add("aui-form-validator",function(U){var N=U.Lang,M=U.Object,n=N.isBoolean,h=N.isDate,Z=M.isEmpty,W=N.isFunction,u=N.isObject,Q=N.isString,B=N.trim,S="",R="form-validator",d="Invalid Date",j="|",z="blurHandlers",H="checkbox",E="container",p="error",AA="errorClass",m="errorContainer",D="form",F="inputHandlers",t="message",a="messages",C="messageContainer",o="name",s="radio",T="rules",y="showAllMessages",b="showMessages",X="type",x="valid",f="validateOnBlur",q="validateOnInput",r="validClass",P="blur",l="errorField",v="input",i="reset",c="submit",g="submitError",K="validateField",e="validField",J=U.ClassNameManager.getClassName,AB=J(R,p),G=J(R,x),Y=J(R,p,E),I=J(R,t,E),V='<label class="'+Y+'"></label>',w='<div class="'+I+'"></div>';function k(){k.superclass.constructor.apply(this,arguments);}U.mix(k,{NAME:R,ATTRS:{errorContainer:{getter:function(A){return U.Node.create(A).cloneNode(true);},value:V},errorClass:{value:AB,validator:Q},form:{setter:U.one},messages:{value:{},validator:u},messageContainer:{getter:function(A){return U.Node.create(A).cloneNode(true);},value:w},rules:{validator:u,value:{}},showMessages:{value:true,validator:n},showAllMessages:{value:false,validator:n},validateOnBlur:{value:true,validator:n},validateOnInput:{value:false,validator:n},validClass:{value:G,validator:Q}},MESSAGES:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(AC,O,AD){var L=null;if(Q(AD)){var A=AD.split(/,\s*|\b\s*/).join(j);L=new RegExp("[.]("+A+")$","i");}return L&&L.test(AC);},date:function(O,L,AC){var A=new Date(O);return(h(A)&&(A!=d)&&!isNaN(A));},equalTo:function(O,L,AC){var A=U.one(AC);return A&&(B(A.val())==O);},max:function(L,A,O){return(k.toNumber(L)<=O);},maxLength:function(L,A,O){return(L.length<=O);},min:function(L,A,O){return(k.toNumber(L)>=O);},minLength:function(L,A,O){return(L.length>=O);},range:function(O,L,AC){var A=k.toNumber(O);return(A>=AC[0])&&(A<=AC[1]);},rangeLength:function(O,L,AC){var A=O.length;return(A>=AC[0])&&(A<=AC[1]);},required:function(AD,O,AE){var A=this;if(U.FormValidator.isCheckable(O)){var L=O.get(o);var AC=A.getElementsByName(L);return(AC.filter(":checked").size()>0);}else{return !!AD;}}},isCheckable:function(L){var A=L.get(X).toLowerCase();return(A==H||A==s);},toNumber:function(A){return parseFloat(A)||0;}});U.each(k.REGEX,function(L,A){k.RULES[A]=function(AC,O,AD){return k.REGEX[A].test(AC);};});U.extend(k,U.Base,{blurHandlers:[],inputHandlers:[],errorContainers:{},errors:{},initializer:function(){var A=this;A.bindUI();},bindUI:function(){var A=this;A._createEvents();A._bindValidation();},addFieldError:function(AC,O){var A=this;var AD=A.errors;var L=AC.get(o);if(!AD[L]){AD[L]=[];}AD[L].push(O);},clearFieldError:function(L){var A=this;delete A.errors[L.get(o)];},eachRule:function(L){var A=this;U.each(A.get(T),function(O,AC){if(W(L)){L.apply(A,[O,AC]);}});},getField:function(L){var A=this;if(Q(L)){L=A.getElementsByName(L).item(0);}return L;},getFieldError:function(L){var A=this;return A.errors[L.get(o)];},hasErrors:function(){var A=this;return !Z(A.errors);
},getElementsByName:function(L){var A=this;return A.get(D).all('[name="'+L+'"]');},getFieldErrorContainer:function(AC){var A=this;var L=AC.get(o);var O=A.errorContainers;if(!O[L]){O[L]=A.get(m);}return O[L];},getFieldErrorMessage:function(AF,AE){var AG=this;var AH=AF.get(o);var O=AG.get(a)[AH]||{};var A=AG.get(T)[AH];var L=k.MESSAGES;var AD={};if(AE in A){var AC=U.Array(A[AE]);U.each(AC,function(AK,AJ){AD[AJ]=[AK].join(S);});}var AI=(O[AE]||L[AE]||L.DEFAULT);return U.substitute(AI,AD);},highlight:function(AC){var L=this;var A=L.get(AA);var O=L.get(r);AC.removeClass(O).addClass(A);},unhighlight:function(AC){var L=this;var A=L.get(AA);var O=L.get(r);AC.removeClass(A).addClass(O);},printErrorStack:function(O,L,AC){var A=this;if(!A.get(y)){AC=AC.slice(0,1);}L.empty();U.each(AC,function(AE,AD){var AF=A.getFieldErrorMessage(O,AE);var AG=A.get(C).addClass(AE);L.append(AG.html(AF));});},resetAllFields:function(){var A=this;A.eachRule(function(O,AC){var L=A.getField(AC);A.resetField(L);});},resetField:function(AD){var L=this;var A=L.get(AA);var AC=L.get(r);var O=L.getFieldErrorContainer(AD);O.remove();L.clearFieldError(AD);AD.removeClass(AC).removeClass(A);},validatable:function(O){var A=this;var AD=A.get(T)[O.get(o)];var AC=AD.required;var L=k.RULES.required.apply(A,[O.val(),O]);return(AC||(!AC&&L));},validate:function(){var A=this;A.eachRule(function(L,O){A.validateField(O);});},validateField:function(AC){var A=this;var O=A.getField(AC);var L=A.validatable(O);A.resetField(O);if(L){A.fire(K,{validator:{field:O}});}},_afterValidateOnBlurChange:function(L){var A=this;A._uiSetValidateOnBlur(L.newVal);},_afterValidateOnInputChange:function(L){var A=this;A._uiSetValidateOnInput(L.newVal);},_bindValidation:function(){var A=this;var L=A.get(D);A._uiSetValidateOnBlur(A.get(f));A._uiSetValidateOnInput(A.get(q));A.after("validateOnBlurChange",A._afterValidateOnBlurChange);A.after("validateOnInputChange",A._afterValidateOnInputChange);L.on(i,U.bind(A._onFormReset,A));L.on(c,U.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var L=function(O,AC){A.publish(O,{defaultFn:AC});};L(l,A._defErrorFieldFn);L(e,A._defValidFieldFn);L(K,A._defValidateFieldFn);},_defErrorFieldFn:function(AC){var A=this;var O=AC.validator;var AD=O.field;A.highlight(AD);if(A.get(b)){var L=A.getFieldErrorContainer(AD);AD.placeBefore(L);A.printErrorStack(AD,L,O.errors);}},_defValidFieldFn:function(L){var A=this;var O=L.validator.field;A.unhighlight(O);},_defValidateFieldFn:function(O){var L=this;var AC=O.validator.field;var AD=L.get(T)[AC.get(o)];U.each(AD,function(AH,AF){var AG=k.RULES[AF];var AE=B(AC.val());if(W(AG)&&!AG.apply(L,[AE,AC,AH])){L.addFieldError(AC,AF);}});var A=L.getFieldError(AC);if(A){L.fire(l,{validator:{field:AC,errors:A}});}else{L.fire(e,{validator:{field:AC}});}},_onBlurField:function(L){var A=this;var O=L.currentTarget.get(o);A.validateField(O);},_onFieldInputChange:function(L){var A=this;A.validateField(L.currentTarget);},_onFormSubmit:function(L){var A=this;var O={validator:{formEvent:L}};A.validate();if(A.hasErrors()){O.validator.errors=A.errors;A.fire(g,O);L.halt();}else{A.fire(c,O);}},_onFormReset:function(L){var A=this;A.resetAllFields();},_bindValidateHelper:function(AD,AC,O,L){var A=this;A._unbindHandlers(L);if(AD){A.eachRule(function(AF,AG){var AE=A.getElementsByName(AG);A[L].push(AE.on(AC,U.bind(O,A)));});}},_uiSetValidateOnInput:function(L){var A=this;A._bindValidateHelper(L,v,A._onFieldInputChange,F);},_uiSetValidateOnBlur:function(L){var A=this;A._bindValidateHelper(L,P,A._onBlurField,z);},_unbindHandlers:function(L){var A=this;U.each(A[L],function(O){O.detach();});A[L]=[];}});U.FormValidator=k;},"@VERSION@",{requires:["aui-base","aui-event-input","substitute"]});