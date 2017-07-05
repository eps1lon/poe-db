
@{%

const parseString = ([chars]) => chars.join('')

const objMerge = (objects, defaults = {}) => 
	objects.reduce((fields, field) => Object.assign(fields, field), Object.assign({}, defaults));

const fields_default = {
	key: '',
	key_id: '',
	key_offset: 0,
	enum: '',
	unique: false,
	file_path: false,
	file_ext: '',
	display: '',
	display_type: '{0}',
	description: ''
}

const virtual_fields_default = {
	fields: [],
	zip: false
}
%}
Main -> Dats {% d => objMerge(d[0]) %}
Dats -> (Dat "\n":?):* {% d => d[0].map(e => e[0]) %}
Dat -> "[" DatIdent "]" Fields:? VirtualFields:? {% (d) => ({ [d[1]]: { fields: d[3], virtual_fields: d[4] } }) %}

Fields -> "\n    [[fields]]" Field:* {% d => objMerge(d[1]) %}
Field -> "\n        [[[" FieldIdent "]]]" Spec:* {% d => ({ [d[1]]: objMerge(d[3], fields_default) } ) %}

VirtualFields -> "\n    [[virtual_fields]]" VirtualField:* {% d => objMerge(d[1]) %}
VirtualField -> "\n        [[[" FieldIdent "]]]" VirtualSpec {% d => ({ [d[1]]: objMerge(d[3], virtual_fields_default) } ) %}

VirtualSpec -> VirtualSpecFields:? VirtualSpecZip:? {% d => [{ fields: d[0], zip: d[1] }] %}
VirtualSpecFields -> "\n            fields = " StringList {% d => d[1] %}
VirtualSpecZip -> "\n            zip = " String {% d => d[1].toLowerCase() === 'true' %}

Spec -> "\n            " SpecProp {% d => d[1] %}
SpecProp -> SpecIdent " = " SpecValue {% d => ({ [d[0]]: d[2][0] }) %}
SpecIdent -> Ident
SpecValue -> String

DatIdent -> Ident
FieldIdent -> Ident
Ident -> [^\n]:+ {% parseString %}

ValueExpression -> Integer | "'" String "'"
String -> .:+ {% parseString %}
Integer -> [0-9]:+
StringList -> [^\n]:* {% d => d[0].join('').split(',').map(s => s.trim()) %}
