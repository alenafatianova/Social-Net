(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[5],{307:function(e,t,s){e.exports={userAvatarContainer:"ChatMessageItem_userAvatarContainer__PGKfi"}},308:function(e,t,s){e.exports={chatMessages:"ChatMessages_chatMessages__24lZt"}},311:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(100),c=s(42),r=s(307),i=s.n(r),j=s(1),u=function(e){var t=e.message;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:i.a.userAvatarContainer,children:[Object(j.jsx)("img",{src:t.photo,alt:"user-avatar"}),t.userName]}),Object(j.jsx)("div",{children:t.message})]})},o=s(308),d=s.n(o),b=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),h=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),s=t[0],r=t[1];return Object(a.useEffect)((function(){b.addEventListener("message",(function(e){var t=JSON.parse(e.data);r([].concat(Object(c.a)(s),Object(c.a)(t)))}))}),[s]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:d.a.chatMessages,children:s.map((function(e,t){return Object(j.jsx)(u,{message:e},t)}))})})},O=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{value:s,name:"addChatMessage",onChange:function(e){return c(e.currentTarget.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){s&&(b.send(s),c(""))},children:"Send"})})]})},l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]})};t.default=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(l,{})})}}}]);
//# sourceMappingURL=5.03b7d2e6.chunk.js.map