"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8302],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>h});var o=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var u=o.createContext({}),m=function(e){var t=o.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=m(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(s),p=n,h=l["".concat(u,".").concat(p)]||l[p]||f[p]||r;return s?o.createElement(h,a(a({ref:t},c),{},{components:s})):o.createElement(h,a({ref:t},c))}));function h(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,a=new Array(r);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:n,a[1]=i;for(var m=2;m<r;m++)a[m]=s[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,s)}p.displayName="MDXCreateElement"},85840:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=s(87462),n=(s(67294),s(3905));const r={},a="Consumer Progress Management",i={unversionedId:"featureBehavior/09consumerprogress",id:"version-5.0/featureBehavior/09consumerprogress",title:"Consumer Progress Management",description:"Apache RocketMQ uses consumer offsets to manage the progress of consumers. This topic describes the consumer progress management mechanism of Apache RocketMQ.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-featureBehavior/09consumerprogress.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/09consumerprogress",permalink:"/docs/featureBehavior/09consumerprogress",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/09consumerprogress.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consumer Load Balancing",permalink:"/docs/featureBehavior/08consumerloadbalance"},next:{title:"Consumption Retry",permalink:"/docs/featureBehavior/10consumerretrypolicy"}},u={},m=[{value:"Background",id:"background",level:2},{value:"Working mechanism",id:"working-mechanism",level:2},{value:"Reset consumer offset",id:"reset-consumer-offset",level:2},{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Usage notes",id:"usage-notes",level:2}],c={toc:m};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"consumer-progress-management"},"Consumer Progress Management"),(0,n.kt)("p",null,"Apache RocketMQ uses consumer offsets to manage the progress of consumers. This topic describes the consumer progress management mechanism of Apache RocketMQ."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"In Apache RocketMQ, messages can be generated before or after they are subscribed to by consumers. So how does a consumer know where to start consuming messages, and how are consumed messages marked? In order to overcome this challenge, Apache RocketMQ has developed the consumer progress management mechanism."),(0,n.kt)("p",null,"The consumer progress management mechanism of Apache RocketMQ solves the following problems:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Where does a client start to consume messages after it is launched?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"How is a consumed message marked to ensure that it is not processed multiple times?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Can a message be consumed again by the same client if a service exception occurs?"))),(0,n.kt)("h2",{id:"working-mechanism"},"Working mechanism"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Message Offset")," "),(0,n.kt)("p",null,"In Apache RocketMQ, messages are queued in topics in the order that they arrive, and are assigned a unique Long-type coordinate. This is also known as the offset of the message. For more information about the individual definitions of these concepts, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/domainModel/02topic"},"Topic")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/domainModel/03messagequeue"},"Message queue"),"."),(0,n.kt)("p",null,"Theoretically speaking, a message queue can store an indefinite number of messages. Therefore, the value range of offset is from 0 to Long.MAX_VALUE. You can locate any message based on its topic, queue, and offset. The following figure shows the relationship between these three concepts.",(0,n.kt)("img",{alt:"Offset",src:s(57651).Z,width:"954",height:"677"})),(0,n.kt)("p",null,"In Apache RocketMQ, the offset of the earliest message in a queue is called the minimum offset (MinOffset), and the offset of the latest message is called the maximum offset (MaxOffset). Although a message queue can theoretically hold an indefinite number of messages, the physical machines on which they are stored have limited space. Therefore, Apache RocketMQ dynamically deletes the earliest message from a queue, and the MinOffset and MaxOffset values of the queue increase constantly. ",(0,n.kt)("img",{alt:"Consumer offset update",src:s(27448).Z,width:"1624",height:"647"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consumer Offset")),(0,n.kt)("p",null,"Apache RocketMQ follows the publish-subscribe pattern. Multiple consumer groups can subscribe to the same queue. In scenarios such as this, when a consumer deletes a message after consuming it, the other consumers are unable to consume it."),(0,n.kt)("p",null,"To prevent this from happening, Apache RocketMQ uses consumer offsets to manage the message consumption progress of different consumers. Apache RocketMQ does not delete a message immediately after it is consumed. Instead, Apache RocketMQ maintains a record of the latest message consumed by a consumer group, which is also called a consumer offset."),(0,n.kt)("p",null,"In the event that a client is restarted, the consumer is able to continue processing messages based on the consumer offset saved in a server. If the consumer offset expires and gets deleted, the MinOffset value of the queue saved in the server is used as the consumer offset."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Consumer offsets are saved to and restored from Apache RocketMQ servers, and are not related to any specific consumer. Therefore, Apache RocketMQ can restore consumer progress across different consumers.")),(0,n.kt)("p",null,"The following figure shows the relationships between the minimum offset, maximum offset, and a consumer offset in a message queue.",(0,n.kt)("img",{alt:"Consumer progress",src:s(13858).Z,width:"979",height:"377"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The consumer offset is always smaller than or equal to the maximum offset."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If messages are produced and consumed at the same rate and there are no unconsumed messages in the queue, the consumer offset is the same as the maximum offset.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If messages are consumed slower than they are produced, unconsumed messages exist in the queue. Consequently, the consumer offset is smaller than the maximum offset, and the difference is the number of unconsumed messages.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Typically, the consumer offset is larger than or equal to the minimum offset. If the consumer offset is smaller than the minimum offset, the consumer is unable to consume messages. In this case, the server restores the correct consumer offset to the consumer."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Initial consumer offset")),(0,n.kt)("p",null,"An initial consumer offset is the consumer offset saved in a server when a consumer group starts to consume a message queue for the first time."),(0,n.kt)("p",null,"Apache RocketMQ uses the maximum offset of a message queue when a consumer obtains messages from the queue for the first time as the initial consumer offset. In other words, the consumer starts consuming from the latest message in the queue."),(0,n.kt)("h2",{id:"reset-consumer-offset"},"Reset consumer offset"),(0,n.kt)("p",null,"If the initial or current consumer offset is not aligned with the state of your business, you can reset the consumer offset to adjust your consumer progress."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scenarios")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improper initial consumer offset: The initial consumer offset is the maximum offset of the queue, that is, the client starts consuming from the latest message. If you need to consume earlier messages, you can reset the consumer offset to that of an earlier message.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consumer lag: A large number of messages can accumulate if the consumer is unable to keep up with the speed at which messages are generated. If the accumulated messages are not mission-critical, you can adjust the consumer offset to a larger value to skip these messages and alleviate downstream burden.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Business backtracking and corrective processing: If you want to re-consume messages that have been incorrectly consumed due to business errors, you can set the consumer offset to a smaller value."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The consumer offset reset feature")),(0,n.kt)("p",null,"The consumer offset reset feature of Apache RocketMQ allows you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reset a consumer offset to any offset in the message queue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reset a consumer offset to a specific point in time. The server adjusts the consumer offset to an offset closest to the time point."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limits")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After you reset a consumer offset, the consumer starts to consume messages from the new offset. In backtracking scenarios, the consumer starts with historical messages that are mostly cold data. Referred to as cold reads, this may cause undue burden to your system. Evaluate the risks and benefits before you proceed with this operation. We recommend that you implement strict control policies for this permission to prevent abuse and frequent resets.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Apache RocketMQ allows you to reset the consumer offset only for visible messages. You cannot reset the offset for messages that are in the scheduling or retry pending states. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/featureBehavior/02delaymessage"},"Delay messages")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/featureBehavior/10consumerretrypolicy"},"Consumption retry"),"."))),(0,n.kt)("h2",{id:"version-compatibility"},"Version compatibility"),(0,n.kt)("p",null,"Servers have different definitions for the initial consumer offset in different versions of Apache RocketMQ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In 4.x and 3.x versions, the initial consumer offset is defined to the message status of a queue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In 5.x versions, the initial consumer offset is the maximum offset of the queue at the time when the consumer starts receiving messages."))),(0,n.kt)("p",null,"Therefore, if you upgrade from an earlier version, you must pay attention to the initial consumer offset when you launch your client."),(0,n.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Strictly control the reset permissions")),(0,n.kt)("p",null,"Resetting the consumer offset incurs additional burden on the system and may affect message reads and writes. Therefore, we recommend that you evaluate the risks and benefits before you perform this operation."))}l.isMDXComponent=!0},57651:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/consumerprogress-da5f38e59a7fcb4ff40325b0f7fbf8a3.png"},13858:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/consumerprogress1-07d9f77dd7e62f2250330ed36f36fe3c.png"},27448:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/updateprogress-02d1a9de72aa4f72c3b1e1c6e03d2407.png"}}]);