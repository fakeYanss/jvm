import{d as t}from"./app.b3b39327.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=t('<h1 id="\u7C7B\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u7C7B\u6587\u4EF6\u7ED3\u6784</h1><h2 id="jvm-\u7684-\u65E0\u5173\u6027" tabindex="-1"><a class="header-anchor" href="#jvm-\u7684-\u65E0\u5173\u6027" aria-hidden="true">#</a> JVM \u7684\u201C\u65E0\u5173\u6027\u201D</h2><p>\u8C08\u8BBA JVM \u7684\u65E0\u5173\u6027\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u4E2A\uFF1A</p><ul><li>\u5E73\u53F0\u65E0\u5173\u6027\uFF1A\u4EFB\u4F55\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u80FD\u8FD0\u884C Java \u4EE3\u7801</li><li>\u8BED\u8A00\u65E0\u5173\u6027\uFF1A JVM \u80FD\u8FD0\u884C\u9664 Java \u4EE5\u5916\u7684\u5176\u4ED6\u4EE3\u7801</li></ul><p>Java \u6E90\u4EE3\u7801\u9996\u5148\u9700\u8981\u4F7F\u7528 Javac \u7F16\u8BD1\u5668\u7F16\u8BD1\u6210 .class \u6587\u4EF6\uFF0C\u7136\u540E\u7531 JVM \u6267\u884C .class \u6587\u4EF6\uFF0C\u4ECE\u800C\u7A0B\u5E8F\u5F00\u59CB\u8FD0\u884C\u3002</p><p>JVM \u53EA\u8BA4\u8BC6 .class \u6587\u4EF6\uFF0C\u5B83\u4E0D\u5173\u5FC3\u662F\u4F55\u79CD\u8BED\u8A00\u751F\u6210\u4E86 .class \u6587\u4EF6\uFF0C\u53EA\u8981 .class \u6587\u4EF6\u7B26\u5408 JVM \u7684\u89C4\u8303\u5C31\u80FD\u8FD0\u884C\u3002 \u76EE\u524D\u5DF2\u7ECF\u6709 JRuby\u3001Jython\u3001Scala \u7B49\u8BED\u8A00\u80FD\u591F\u5728 JVM \u4E0A\u8FD0\u884C\u3002\u5B83\u4EEC\u6709\u5404\u81EA\u7684\u8BED\u6CD5\u89C4\u5219\uFF0C\u4E0D\u8FC7\u5B83\u4EEC\u7684\u7F16\u8BD1\u5668 \u90FD\u80FD\u5C06\u5404\u81EA\u7684\u6E90\u7801\u7F16\u8BD1\u6210\u7B26\u5408 JVM \u89C4\u8303\u7684 .class \u6587\u4EF6\uFF0C\u4ECE\u800C\u80FD\u591F\u501F\u52A9 JVM \u8FD0\u884C\u5B83\u4EEC\u3002</p><blockquote><p>Java \u8BED\u8A00\u4E2D\u7684\u5404\u79CD\u53D8\u91CF\u3001\u5173\u952E\u5B57\u548C\u8FD0\u7B97\u7B26\u53F7\u7684\u8BED\u4E49\u6700\u7EC8\u90FD\u662F\u7531\u591A\u6761\u5B57\u8282\u7801\u547D\u4EE4\u7EC4\u5408\u800C\u6210\u7684\uFF0C \u56E0\u6B64\u5B57\u8282\u7801\u547D\u4EE4\u6240\u80FD\u63D0\u4F9B\u7684\u8BED\u4E49\u63CF\u8FF0\u80FD\u529B\u80AF\u5B9A\u4F1A\u6BD4 Java \u8BED\u8A00\u672C\u8EAB\u66F4\u52A0\u5F3A\u5927\u3002 \u56E0\u6B64\uFF0C\u6709\u4E00\u4E9B Java \u8BED\u8A00\u672C\u8EAB\u65E0\u6CD5\u6709\u6548\u652F\u6301\u7684\u8BED\u8A00\u7279\u6027\uFF0C\u4E0D\u4EE3\u8868\u5B57\u8282\u7801\u672C\u8EAB\u65E0\u6CD5\u6709\u6548\u652F\u6301\u3002</p></blockquote><h2 id="class-\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#class-\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> Class \u6587\u4EF6\u7ED3\u6784</h2><p>Class \u6587\u4EF6\u662F\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5B83\u7684\u5185\u5BB9\u5177\u6709\u4E25\u683C\u7684\u89C4\u8303\uFF0C\u6587\u4EF6\u4E2D\u6CA1\u6709\u4EFB\u4F55\u7A7A\u683C\uFF0C\u5168\u90FD\u662F\u8FDE\u7EED\u7684 0/1\u3002Class \u6587\u4EF6 \u4E2D\u7684\u6240\u6709\u5185\u5BB9\u88AB\u5206\u4E3A\u4E24\u79CD\u7C7B\u578B\uFF1A\u65E0\u7B26\u53F7\u6570\u3001\u8868\u3002</p><ul><li>\u65E0\u7B26\u53F7\u6570 \u65E0\u7B26\u53F7\u6570\u8868\u793A Class \u6587\u4EF6\u4E2D\u7684\u503C\uFF0C\u8FD9\u4E9B\u503C\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B\uFF0C\u4F46\u6709\u4E0D\u540C\u7684\u957F\u5EA6\u3002u1\u3001u2\u3001u4\u3001u8 \u5206\u522B\u4EE3\u8868 1/2/4/8 \u5B57\u8282\u7684\u65E0\u7B26\u53F7\u6570\u3002</li><li>\u8868 \u7531\u591A\u4E2A\u65E0\u7B26\u53F7\u6570\u6216\u8005\u5176\u4ED6\u8868\u4F5C\u4E3A\u6570\u636E\u9879\u6784\u6210\u7684\u590D\u5408\u6570\u636E\u7C7B\u578B\u3002</li></ul><p>Class \u6587\u4EF6\u5177\u4F53\u7531\u4EE5\u4E0B\u51E0\u4E2A\u6784\u6210:</p><ul><li>\u9B54\u6570</li><li>\u7248\u672C\u4FE1\u606F</li><li>\u5E38\u91CF\u6C60</li><li>\u8BBF\u95EE\u6807\u5FD7</li><li>\u7C7B\u7D22\u5F15\u3001\u7236\u7C7B\u7D22\u5F15\u3001\u63A5\u53E3\u7D22\u5F15\u96C6\u5408</li><li>\u5B57\u6BB5\u8868\u96C6\u5408</li><li>\u65B9\u6CD5\u8868\u96C6\u5408</li><li>\u5C5E\u6027\u8868\u96C6\u5408</li></ul><h3 id="\u9B54\u6570" tabindex="-1"><a class="header-anchor" href="#\u9B54\u6570" aria-hidden="true">#</a> \u9B54\u6570</h3><p>Class \u6587\u4EF6\u7684\u5934 4 \u4E2A\u5B57\u8282\u79F0\u4E3A\u9B54\u6570\uFF0C\u7528\u6765\u8868\u793A\u8FD9\u4E2A Class \u6587\u4EF6\u7684\u7C7B\u578B\u3002</p><p>Class \u6587\u4EF6\u7684\u9B54\u6570\u662F\u7528 16 \u8FDB\u5236\u8868\u793A\u7684\u201CCAFE BABE\u201D\uFF0C\u662F\u4E0D\u662F\u5F88\u5177\u6709\u6D6A\u6F2B\u8272\u5F69\uFF1F</p><blockquote><p>\u9B54\u6570\u76F8\u5F53\u4E8E\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u53EA\u4E0D\u8FC7\u540E\u7F00\u540D\u5BB9\u6613\u88AB\u4FEE\u6539\uFF0C\u4E0D\u5B89\u5168\uFF0C\u56E0\u6B64\u5728 Class \u6587\u4EF6\u4E2D\u6807\u8BC6\u6587\u4EF6\u7C7B\u578B\u6BD4\u8F83\u5408\u9002\u3002</p></blockquote><h3 id="\u7248\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u4FE1\u606F" aria-hidden="true">#</a> \u7248\u672C\u4FE1\u606F</h3><p>\u7D27\u63A5\u7740\u9B54\u6570\u7684 4 \u4E2A\u5B57\u8282\u662F\u7248\u672C\u4FE1\u606F\uFF0C5-6 \u5B57\u8282\u8868\u793A\u6B21\u7248\u672C\u53F7\uFF0C7-8 \u5B57\u8282\u8868\u793A\u4E3B\u7248\u672C\u53F7\uFF0C\u5B83\u4EEC\u8868\u793A\u5F53\u524D Class \u6587\u4EF6\u4E2D\u4F7F\u7528\u7684\u662F\u54EA\u4E2A\u7248\u672C\u7684 JDK\u3002</p><p>\u9AD8\u7248\u672C\u7684 JDK \u80FD\u5411\u4E0B\u517C\u5BB9\u4EE5\u524D\u7248\u672C\u7684 Class \u6587\u4EF6\uFF0C\u4F46\u4E0D\u80FD\u8FD0\u884C\u4EE5\u540E\u7248\u672C\u7684 Class \u6587\u4EF6\uFF0C\u5373\u4F7F\u6587\u4EF6\u683C\u5F0F\u5E76\u672A\u53D1\u751F\u4EFB\u4F55\u53D8\u5316\uFF0C\u865A\u62DF\u673A\u4E5F\u5FC5\u9700\u62D2\u7EDD\u6267\u884C\u8D85\u8FC7\u5176\u7248\u672C\u53F7\u7684 Class \u6587\u4EF6\u3002</p><h3 id="\u5E38\u91CF\u6C60" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u6C60" aria-hidden="true">#</a> \u5E38\u91CF\u6C60</h3><p>\u7248\u672C\u4FE1\u606F\u4E4B\u540E\u5C31\u662F\u5E38\u91CF\u6C60\uFF0C\u5E38\u91CF\u6C60\u4E2D\u5B58\u653E\u4E24\u79CD\u7C7B\u578B\u7684\u5E38\u91CF\uFF1A</p><ul><li><p>\u5B57\u9762\u503C\u5E38\u91CF</p><p>\u5B57\u9762\u503C\u5E38\u91CF\u5C31\u662F\u6211\u4EEC\u5728\u7A0B\u5E8F\u4E2D\u5B9A\u4E49\u7684\u5B57\u7B26\u4E32\u3001\u88AB final \u4FEE\u9970\u7684\u503C\u3002</p></li><li><p>\u7B26\u53F7\u5F15\u7528</p><p>\u7B26\u53F7\u5F15\u7528\u5C31\u662F\u6211\u4EEC\u5B9A\u4E49\u7684\u5404\u79CD\u540D\u5B57\uFF1A\u7C7B\u548C\u63A5\u53E3\u7684\u5168\u9650\u5B9A\u540D\u3001\u5B57\u6BB5\u7684\u540D\u5B57\u548C\u63CF\u8FF0\u7B26\u3001\u65B9\u6CD5\u7684\u540D\u5B57\u548C\u63CF\u8FF0\u7B26\u3002</p></li></ul><h4 id="\u5E38\u91CF\u6C60\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u6C60\u7684\u7279\u70B9" aria-hidden="true">#</a> \u5E38\u91CF\u6C60\u7684\u7279\u70B9</h4><ul><li>\u5E38\u91CF\u6C60\u4E2D\u5E38\u91CF\u6570\u91CF\u4E0D\u56FA\u5B9A\uFF0C\u56E0\u6B64\u5E38\u91CF\u6C60\u5F00\u5934\u653E\u7F6E\u4E00\u4E2A u2 \u7C7B\u578B\u7684\u65E0\u7B26\u53F7\u6570\uFF0C\u7528\u6765\u5B58\u50A8\u5F53\u524D\u5E38\u91CF\u6C60\u7684\u5BB9\u91CF\u3002</li><li>\u5E38\u91CF\u6C60\u7684\u6BCF\u4E00\u9879\u5E38\u91CF\u90FD\u662F\u4E00\u4E2A\u8868\uFF0C\u8868\u5F00\u59CB\u7684\u7B2C\u4E00\u4F4D\u662F\u4E00\u4E2A u1 \u7C7B\u578B\u7684\u6807\u5FD7\u4F4D\uFF08tag\uFF09\uFF0C\u4EE3\u8868\u5F53\u524D\u8FD9\u4E2A\u5E38\u91CF\u5C5E\u4E8E\u54EA\u79CD\u5E38\u91CF\u7C7B\u578B\u3002</li></ul><h4 id="\u5E38\u91CF\u6C60\u4E2D\u5E38\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u6C60\u4E2D\u5E38\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5E38\u91CF\u6C60\u4E2D\u5E38\u91CF\u7C7B\u578B</h4><table><thead><tr><th>\u7C7B\u578B</th><th>tag</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>CONSTANT_utf8_info</td><td>1</td><td>UTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32</td></tr><tr><td>CONSTANT_Integer_info</td><td>3</td><td>\u6574\u578B\u5B57\u9762\u91CF</td></tr><tr><td>CONSTANT_Float_info</td><td>4</td><td>\u6D6E\u70B9\u578B\u5B57\u9762\u91CF</td></tr><tr><td>CONSTANT_Long_info</td><td>5</td><td>\u957F\u6574\u578B\u5B57\u9762\u91CF</td></tr><tr><td>CONSTANT_Double_info</td><td>6</td><td>\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B\u5B57\u9762\u91CF</td></tr><tr><td>CONSTANT_Class_info</td><td>7</td><td>\u7C7B\u6216\u63A5\u53E3\u7684\u7B26\u53F7\u5F15\u7528</td></tr><tr><td>CONSTANT_String_info</td><td>8</td><td>\u5B57\u7B26\u4E32\u7C7B\u578B\u5B57\u9762\u91CF</td></tr><tr><td>CONSTANT_Fieldref_info</td><td>9</td><td>\u5B57\u6BB5\u7684\u7B26\u53F7\u5F15\u7528</td></tr><tr><td>CONSTANT_Methodref_info</td><td>10</td><td>\u7C7B\u4E2D\u65B9\u6CD5\u7684\u7B26\u53F7\u5F15\u7528</td></tr><tr><td>CONSTANT_InterfaceMethodref_info</td><td>11</td><td>\u63A5\u53E3\u4E2D\u65B9\u6CD5\u7684\u7B26\u53F7\u5F15\u7528</td></tr><tr><td>CONSTANT_NameAndType_info</td><td>12</td><td>\u5B57\u6BB5\u6216\u65B9\u6CD5\u7684\u7B26\u53F7\u5F15\u7528</td></tr><tr><td>CONSTANT_MethodHandle_info</td><td>15</td><td>\u8868\u793A\u65B9\u6CD5\u53E5\u67C4</td></tr><tr><td>CONSTANT_MethodType_info</td><td>16</td><td>\u6807\u8BC6\u65B9\u6CD5\u7C7B\u578B</td></tr><tr><td>CONSTANT_InvokeDynamic_info</td><td>18</td><td>\u8868\u793A\u4E00\u4E2A\u52A8\u6001\u65B9\u6CD5\u8C03\u7528\u70B9</td></tr></tbody></table><p>\u5BF9\u4E8E CONSTANT_Class_info\uFF08\u6B64\u7C7B\u578B\u7684\u5E38\u91CF\u4EE3\u8868\u4E00\u4E2A\u7C7B\u6216\u8005\u63A5\u53E3\u7684\u7B26\u53F7\u5F15\u7528\uFF09\uFF0C\u5B83\u7684\u4E8C\u7EF4\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u540D\u79F0</th><th>\u6570\u91CF</th></tr></thead><tbody><tr><td>u1</td><td>tag</td><td>1</td></tr><tr><td>u2</td><td>name_index</td><td>1</td></tr></tbody></table><p>tag \u662F\u6807\u5FD7\u4F4D\uFF0C\u7528\u4E8E\u533A\u5206\u5E38\u91CF\u7C7B\u578B\uFF1Bname_index \u662F\u4E00\u4E2A\u7D22\u5F15\u503C\uFF0C\u5B83\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E00\u4E2A CONSTANT_Utf8_info \u7C7B\u578B\u5E38\u91CF\uFF0C\u6B64\u5E38\u91CF\u4EE3\u8868\u8FD9\u4E2A\u7C7B\uFF08\u6216\u63A5\u53E3\uFF09\u7684\u5168\u9650\u5B9A\u540D\uFF0C\u8FD9\u91CC name_index \u503C\u82E5\u4E3A 0x0002\uFF0C\u4E5F\u5373\u662F\u6307\u5411\u4E86\u5E38\u91CF\u6C60\u4E2D\u7684\u7B2C\u4E8C\u9879\u5E38\u91CF\u3002</p><p>CONSTANT_Utf8_info \u578B\u5E38\u91CF\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u540D\u79F0</th><th>\u6570\u91CF</th></tr></thead><tbody><tr><td>u1</td><td>tag</td><td>1</td></tr><tr><td>u2</td><td>length</td><td>1</td></tr><tr><td>u1</td><td>bytes</td><td>length</td></tr></tbody></table><p>tag \u662F\u5F53\u524D\u5E38\u91CF\u7684\u7C7B\u578B\uFF1Blength \u8868\u793A\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF1Bbytes \u662F\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\uFF08\u91C7\u7528\u7F29\u7565\u7684 UTF8 \u7F16\u7801\uFF09</p><h3 id="\u8BBF\u95EE\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6807\u5FD7" aria-hidden="true">#</a> \u8BBF\u95EE\u6807\u5FD7</h3><p>\u5728\u5E38\u91CF\u6C60\u7ED3\u675F\u4E4B\u540E\uFF0C\u7D27\u63A5\u7740\u7684\u4E24\u4E2A\u5B57\u8282\u4EE3\u8868\u8BBF\u95EE\u6807\u5FD7\uFF0C\u8FD9\u4E2A\u6807\u5FD7\u7528\u4E8E\u8BC6\u522B\u4E00\u4E9B\u7C7B\u6216\u8005\u63A5\u53E3\u5C42\u6B21\u7684\u8BBF\u95EE\u4FE1\u606F\uFF0C\u5305\u62EC\uFF1A\u8FD9\u4E2A Class \u662F\u7C7B\u8FD8\u662F\u63A5\u53E3\uFF1B\u662F\u5426\u5B9A\u4E49\u4E3A public \u7C7B\u578B\uFF1B\u662F\u5426\u88AB abstract/final \u4FEE\u9970\u3002</p><h3 id="\u7C7B\u7D22\u5F15\u3001\u7236\u7C7B\u7D22\u5F15\u3001\u63A5\u53E3\u7D22\u5F15\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7D22\u5F15\u3001\u7236\u7C7B\u7D22\u5F15\u3001\u63A5\u53E3\u7D22\u5F15\u96C6\u5408" aria-hidden="true">#</a> \u7C7B\u7D22\u5F15\u3001\u7236\u7C7B\u7D22\u5F15\u3001\u63A5\u53E3\u7D22\u5F15\u96C6\u5408</h3><p>\u7C7B\u7D22\u5F15\u548C\u7236\u7C7B\u7D22\u5F15\u90FD\u662F\u4E00\u4E2A u2 \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u800C\u63A5\u53E3\u7D22\u5F15\u96C6\u5408\u662F\u4E00\u7EC4 u2 \u7C7B\u578B\u7684\u6570\u636E\u7684\u96C6\u5408\uFF0CClass \u6587\u4EF6\u4E2D\u7531\u8FD9\u4E09\u9879\u6570\u636E\u6765\u786E\u5B9A\u7C7B\u7684\u7EE7\u627F\u5173\u7CFB\u3002\u7C7B\u7D22\u5F15\u7528\u4E8E\u786E\u5B9A\u8FD9\u4E2A\u7C7B\u7684\u5168\u9650\u5B9A\u540D\uFF0C\u7236\u7C7B\u7D22\u5F15\u7528\u4E8E\u786E\u5B9A\u8FD9\u4E2A\u7C7B\u7684\u7236\u7C7B\u7684\u5168\u9650\u5B9A\u540D\u3002</p><p>\u7531\u4E8E Java \u4E0D\u5141\u8BB8\u591A\u91CD\u7EE7\u627F\uFF0C\u6240\u4EE5\u7236\u7C7B\u7D22\u5F15\u53EA\u6709\u4E00\u4E2A\uFF0C\u9664\u4E86 java.lang.Object \u4E4B\u5916\uFF0C\u6240\u6709\u7684 Java \u7C7B\u90FD\u6709\u7236\u7C7B\uFF0C\u56E0\u6B64\u9664\u4E86 java.lang.Object \u5916\uFF0C\u6240\u6709 Java \u7C7B\u7684\u7236\u7C7B\u7D22\u5F15\u90FD\u4E0D\u4E3A 0\u3002\u4E00\u4E2A\u7C7B\u53EF\u80FD\u5B9E\u73B0\u4E86\u591A\u4E2A\u63A5\u53E3\uFF0C\u56E0\u6B64\u7528\u63A5\u53E3\u7D22\u5F15\u96C6\u5408\u6765\u63CF\u8FF0\u3002\u8FD9\u4E2A\u96C6\u5408\u7B2C\u4E00\u9879\u4E3A u2 \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8868\u793A\u7D22\u5F15\u8868\u7684\u5BB9\u91CF\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u63A5\u53E3\u7684\u540D\u5B57\u7D22\u5F15\u3002</p><p>\u7C7B\u7D22\u5F15\u548C\u7236\u7C7B\u7D22\u5F15\u7528\u4E24\u4E2A u2 \u7C7B\u578B\u7684\u7D22\u5F15\u503C\u8868\u793A\uFF0C\u5B83\u4EEC\u5404\u81EA\u6307\u5411\u4E00\u4E2A\u7C7B\u578B\u4E3A CONSTANT_Class_info \u7684\u7C7B\u63CF\u8FF0\u7B26\u5E38\u91CF\uFF0C\u901A\u8FC7\u8BE5\u5E38\u91CF\u603B\u7684\u7D22\u5F15\u503C\u53EF\u4EE5\u627E\u5230\u5B9A\u4E49\u5728 CONSTANT_Utf8_info \u7C7B\u578B\u7684\u5E38\u91CF\u4E2D\u7684\u5168\u9650\u5B9A\u540D\u5B57\u7B26\u4E32\u3002</p><h3 id="\u5B57\u6BB5\u8868\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u8868\u96C6\u5408" aria-hidden="true">#</a> \u5B57\u6BB5\u8868\u96C6\u5408</h3><p>\u5B57\u6BB5\u8868\u96C6\u5408\u5B58\u50A8\u672C\u7C7B\u6D89\u53CA\u5230\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u5305\u62EC\u5B9E\u4F8B\u53D8\u91CF\u548C\u7C7B\u53D8\u91CF\uFF0C\u4F46\u4E0D\u5305\u62EC\u65B9\u6CD5\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><p>\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u8868\u53EA\u8868\u793A\u4E00\u4E2A\u6210\u5458\u53D8\u91CF\uFF0C\u672C\u7C7B\u4E2D\u7684\u6240\u6709\u6210\u5458\u53D8\u91CF\u6784\u6210\u4E86\u5B57\u6BB5\u8868\u96C6\u5408\u3002\u5B57\u6BB5\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u540D\u79F0</th><th>\u6570\u91CF</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>u2</td><td>access_flags</td><td>1</td><td>\u5B57\u6BB5\u7684\u8BBF\u95EE\u6807\u5FD7\uFF0C\u4E0E\u7C7B\u7A0D\u6709\u4E0D\u540C</td></tr><tr><td>u2</td><td>name_index</td><td>1</td><td>\u5B57\u6BB5\u540D\u5B57\u7684\u7D22\u5F15</td></tr><tr><td>u2</td><td>descriptor_index</td><td>1</td><td>\u63CF\u8FF0\u7B26\uFF0C\u7528\u4E8E\u63CF\u8FF0\u5B57\u6BB5\u7684\u6570\u636E\u7C7B\u578B\u3002 \u57FA\u672C\u6570\u636E\u7C7B\u578B\u7528\u5927\u5199\u5B57\u6BCD\u8868\u793A\uFF1B \u5BF9\u8C61\u7C7B\u578B\u7528\u201CL \u5BF9\u8C61\u7C7B\u578B\u7684\u5168\u9650\u5B9A\u540D\u201D\u8868\u793A\u3002</td></tr><tr><td>u2</td><td>attributes_count</td><td>1</td><td>\u5C5E\u6027\u8868\u96C6\u5408\u7684\u957F\u5EA6</td></tr><tr><td>u2</td><td>attributes</td><td>attributes_count</td><td>\u5C5E\u6027\u8868\u96C6\u5408\uFF0C\u7528\u4E8E\u5B58\u653E\u5C5E\u6027\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u5982\u5C5E\u6027\u7684\u503C\u3002</td></tr></tbody></table><blockquote><p>\u5B57\u6BB5\u8868\u96C6\u5408\u4E2D\u4E0D\u4F1A\u51FA\u73B0\u4ECE\u7236\u7C7B\uFF08\u6216\u63A5\u53E3\uFF09\u4E2D\u7EE7\u627F\u800C\u6765\u7684\u5B57\u6BB5\uFF0C\u4F46\u6709\u53EF\u80FD\u51FA\u73B0\u539F\u672C Java \u4EE3\u7801\u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5\uFF0C\u8B6C\u5982\u5728\u5185\u90E8\u7C7B\u4E2D\u4E3A\u4E86\u4FDD\u6301\u5BF9\u5916\u90E8\u7C7B\u7684\u8BBF\u95EE\u6027\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u6307\u5411\u5916\u90E8\u7C7B\u5B9E\u4F8B\u7684\u5B57\u6BB5\u3002</p></blockquote><h3 id="\u65B9\u6CD5\u8868\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u8868\u96C6\u5408" aria-hidden="true">#</a> \u65B9\u6CD5\u8868\u96C6\u5408</h3><p>\u65B9\u6CD5\u8868\u7ED3\u6784\u4E0E\u5C5E\u6027\u8868\u7C7B\u4F3C\u3002</p><p>volatile \u5173\u952E\u5B57 \u548C transient \u5173\u952E\u5B57\u4E0D\u80FD\u4FEE\u9970\u65B9\u6CD5\uFF0C\u6240\u4EE5\u65B9\u6CD5\u8868\u7684\u8BBF\u95EE\u6807\u5FD7\u4E2D\u6CA1\u6709 ACC_VOLATILE \u548C ACC_TRANSIENT \u6807\u5FD7\u3002</p><p>\u65B9\u6CD5\u8868\u7684\u5C5E\u6027\u8868\u96C6\u5408\u4E2D\u6709\u4E00\u5F20 Code \u5C5E\u6027\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u5F53\u524D\u65B9\u6CD5\u7ECF\u7F16\u8BD1\u5668\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6307\u4EE4\u3002</p><h3 id="\u5C5E\u6027\u8868\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u8868\u96C6\u5408" aria-hidden="true">#</a> \u5C5E\u6027\u8868\u96C6\u5408</h3><p>\u6BCF\u4E2A\u5C5E\u6027\u5BF9\u5E94\u4E00\u5F20\u5C5E\u6027\u8868\uFF0C\u5C5E\u6027\u8868\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u540D\u79F0</th><th>\u6570\u91CF</th></tr></thead><tbody><tr><td>u2</td><td>attribute_name_index</td><td>1</td></tr><tr><td>u4</td><td>attribute_length</td><td>1</td></tr><tr><td>u1</td><td>info</td><td>attribute_length</td></tr></tbody></table>',50);function r(h,i){return e}var n=d(a,[["render",r]]);export{n as default};