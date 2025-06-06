// //////////////////////////////////////////////
// Developer: Леонид Залюбовский [LEONEED.PRO]
// Project: Instagram Parser followers & following
// Made with Love & Coffee in Russia
// //////////////////////////////////////////////

// ----------------------------------------------
// Создаем элемент вставки стилей интерфейса
// ----------------------------------------------
let style = document.createElement('style')
style.innerHTML = '::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}html,body{position:relative;overflow:hidden !important;padding:0;margin:0}.insta-wrapper{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%;background:rgba(0,0,0,.5);z-index:10000;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto}@media only screen and (max-width: 800px){.insta-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}}.insta-wrapper *{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}.insta-modal-wrap{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;width:100%;min-height:100%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 800px){.insta-modal-wrap{margin:0}}.insta-modal{margin:20px 0;position:relative;max-width:960px;border-radius:12px;padding:40px;color:#f5f5f5;font-size:14px;font-weight:400;background:-webkit-gradient(linear, left top, left bottom, from(#28313A), to(#1D2428));background:-webkit-linear-gradient(top, #28313A 0%, #1D2428 100%);background:-o-linear-gradient(top, #28313A 0%, #1D2428 100%);background:linear-gradient(180deg, #28313A 0%, #1D2428 100%);z-index:1;-webkit-box-shadow:0px 7px 25px rgba(0,0,0,.25);box-shadow:0px 7px 25px rgba(0,0,0,.25);-webkit-transition:max-width .3s ease-in-out;-o-transition:max-width .3s ease-in-out;transition:max-width .3s ease-in-out;overflow:hidden}@media only screen and (max-width: 800px){.insta-modal{margin:0;border-radius:0;padding:40px 20px;max-width:600px}}@media only screen and (max-width: 960px){.insta-modal{margin:0;border-radius:0;padding:40px 20px;height:100%}}.insta-background{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1}@media only screen and (max-width: 800px){.insta-background{-webkit-transform:translate(-70%, -40%);-o-transform:translate(-70%, -40%);transform:translate(-70%, -40%)}}.insta-background svg{min-height:100%}.insta-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.insta-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;gap:12px;font-size:36px;line-height:1;font-weight:600}@media only screen and (max-width: 800px){.insta-title{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;gap:6px;font-size:36px}}.insta-title span{font-size:20px;line-height:1.4;color:#758595;font-weight:400}@media only screen and (max-width: 800px){.insta-title span{font-size:14px}}.insta-close{display:block;line-height:0;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;-o-transition:-o-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out, -o-transform .3s ease-in-out;cursor:pointer;z-index:10001}.insta-close:hover{-webkit-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.insta-section{border-top:1px solid #333c45;padding-top:20px;margin-top:20px}.insta-row{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;gap:40px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width: 800px){.insta-row{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:20px}}.insta-row.insta-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;gap:20px}@media only screen and (max-width: 800px){.insta-row.insta-start{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:20px}}.insta-row.insta-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.insta-col{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:40px}@media only screen and (max-width: 800px){.insta-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;gap:20px}}.insta-col.insta-left{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.insta-col.divider{width:33.333%;width:calc((100% - 1px)/3);gap:20px}@media only screen and (max-width: 800px){.insta-col.divider{width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:20px}}.insta-col.divider:before{content:"";padding:0 0;border-left:1px solid #333c45;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;border-width:1px}@media only screen and (max-width: 800px){.insta-col.divider:before{border-left:none;border-top:1px solid #333c45}}.insta-col.divider:first-child{gap:0}.insta-col.divider:first-child:before{content:"";padding:0;border-left:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;border-width:0}@media only screen and (max-width: 800px){.insta-col.divider:first-child:before{border-left:none;border-top:none}}.insta-star{margin-top:8px;font-size:12px;font-weight:400;color:#758595}.insta-col-name{font-size:20px;font-weight:600;margin-bottom:8px}@media only screen and (max-width: 800px){.insta-col-name{margin-bottom:20px}}.insta-col-desc{font-size:14px;font-weight:400;line-height:1.4}form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%}.insta-radio-group{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:20px}@media only screen and (max-width: 800px){.insta-radio-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}.insta-radio input[type=radio]{display:none}.insta-radio label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:36px;user-select:none;cursor:pointer;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.insta-radio label:before{content:"";position:absolute;top:50%;left:0;-webkit-transform:translate(0, -50%);-o-transform:translate(0, -50%);transform:translate(0, -50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:20px;height:20px;background:rgba(0,0,0,0);border:2px solid #962fbf;border-radius:50%;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.insta-radio label div{font-size:14px;font-weight:400}.insta-radio label span{font-size:12px;font-weight:400}@media only screen and (max-width: 800px){.insta-radio label span{display:none}}.insta-radio input[type=radio]:checked+label:after{content:"";border-radius:50%;position:absolute;top:50%;left:12px;-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:6px solid #962fbf}.insta-radio label:hover:before{-webkit-filter:brightness(120%);filter:brightness(120%);-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.insta-radio input[type=radio]:disabled+label{color:#758595;cursor:default}.insta-radio input[type=radio]:disabled+label:before{border-color:#758595;cursor:default}.insta-radio input[type=radio]:disabled:hover+label:before{-webkit-filter:brightness(100%);filter:brightness(100%);border-color:#758595;background:rgba(0,0,0,0);-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}insta-radio p{margin:0;padding:0}.insta-account{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;gap:20px}.insta-account-image{position:relative;line-height:0}.insta-account-image img{position:relative;height:100px;width:100px;background:#f5f5f5;outline:none;border:none;border-radius:100px;z-index:3}.insta-insta-back{height:110%;width:110%;background:-webkit-linear-gradient(49.54deg, #FEDA75 14.96%, rgba(243, 110, 46, 0.822917) 27.19%, #D62976 59.56%, #962FBF 70.72%, #4F5BD5 84.03%);background:-o-linear-gradient(49.54deg, #FEDA75 14.96%, rgba(243, 110, 46, 0.822917) 27.19%, #D62976 59.56%, #962FBF 70.72%, #4F5BD5 84.03%);background:linear-gradient(40.46deg, #FEDA75 14.96%, rgba(243, 110, 46, 0.822917) 27.19%, #D62976 59.56%, #962FBF 70.72%, #4F5BD5 84.03%);border-radius:100px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:1}.insta-black-back{height:105%;width:105%;background:#202e38;border-radius:100px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:1}.insta-account-data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:6px}.insta-account-name{font-size:20px;font-weight:600;margin-bottom:6px;white-space:nowrap}.insta-account-private,.insta-account-followers,.insta-account-following,.insta-account-posts{white-space:nowrap}.insta-private-false{color:#5cff80}.insta-private-true{color:#ff5c5c}.insta-checkbox input[type=checkbox]{display:none}.insta-checkbox label{cursor:pointer;width:100px;height:40px;background:#333c45;display:block;border-radius:100px;position:relative;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.insta-checkbox label:hover{-webkit-filter:brightness(120%);filter:brightness(120%)}.insta-checkbox label:after{content:"";position:absolute;top:5px;left:5px;width:30px;height:30px;background:#f5f5f5;border-radius:90px;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.insta-checkbox input:checked+label{background:#962fbf}.insta-checkbox input:checked+label:after{left:calc(100% - 5px);-webkit-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}.insta-checkbox label:active:after{width:90px}.insta-request input[type=number]::-webkit-outer-spin-button,.insta-request input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.insta-request input[type=number]{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;outline:none;height:40px;width:130px;text-align:center;color:#f5f5f5;background:#333c45;border:none;border-radius:4px;font-size:14px;font-weight:400}@media only screen and (max-width: 800px){.insta-request input[type=number]{width:100%}}.insta-endpoint{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:12px;margin-top:8px;width:100%}@media only screen and (max-width: 800px){.insta-endpoint{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:20px;gap:12px}}.insta-endpoint input[type=text]{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;outline:none;height:40px;width:450px;text-align:left;color:#f5f5f5;background:#333c45;border:none;border-radius:4px;font-size:14px;font-weight:400;padding:0 12px}@media only screen and (max-width: 800px){.insta-endpoint input[type=text]{width:100%;max-width:400px}}.insta-btn{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:40px;width:130px;border:none;border-radius:4px;font-size:14px;line-height:1;font-weight:400;text-decoration:none;background:#962fbf;color:#f5f5f5;white-space:nowrap;cursor:pointer;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}@media only screen and (max-width: 800px){.insta-btn{width:100%;max-width:400px}}.insta-btn:hover{text-decoration:none;-webkit-filter:brightness(120%);filter:brightness(120%)}.insta-start-wrapper{position:relative;z-index:0;background:none;outline:0;border:0;cursor:pointer}@media only screen and (max-width: 800px){.insta-start-wrapper{padding:40px 0;margin:0 auto}}.insta-start-emitter{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:20px;font-weight:600;text-transform:uppercase;color:#f5f5f5;margin:0 auto;width:130px;height:130px;border:none;border-radius:300px;background-color:#d62976;cursor:pointer;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.insta-start-emitter:hover{-webkit-filter:brightness(120%);filter:brightness(120%);-webkit-transition:.3s ease-in-out;-o-transition:.3s ease-in-out;transition:.3s ease-in-out}.insta-start-wrapper.toggle .insta-start-emitter{background-color:#4f5bd5}.insta-start-wrapper.ready .insta-start-emitter{background-color:#5cff80;color:#202e38}.insta-start-wave{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:150px;height:150px;border-radius:100px;background-color:#d62976;opacity:.1;z-index:-1;pointer-events:none}.insta-start-wrapper.toggle .insta-start-wave{background-color:#4f5bd5}.insta-start-wrapper.ready .insta-start-wave{background-color:#5cff80}.insta-start-wave{-webkit-animation:instaSonar 2s linear infinite;-o-animation:instaSonar 2s linear infinite;animation:instaSonar 2s linear infinite}@-webkit-keyframes instaSonar{0%{opacity:.1}50%{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);opacity:.5}100%{opacity:.1}}@-o-keyframes instaSonar{0%{opacity:.1}50%{-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);opacity:.5}100%{opacity:.1}}@keyframes instaSonar{0%{opacity:.1}50%{-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);opacity:.5}100%{opacity:.1}}ul.insta-console{list-style:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:40px}@media only screen and (max-width: 800px){ul.insta-console{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;gap:12px}}ul.insta-console li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:6px;font-size:14px}ul.insta-console li span{font-size:16px;font-weight:400}ul.insta-footer{list-style:none;padding:0;margin:0;font-weight:400;font-size:12px;font-weight:400;line-height:1.4;color:#758595}@media only screen and (max-width: 800px){ul.insta-footer{margin:0 auto}}ul.insta-footer a.insta-link{color:#758595;text-decoration:none;-webkit-transition:color .3s ease-in-out;-o-transition:color .3s ease-in-out;transition:color .3s ease-in-out}ul.insta-footer a.insta-link:hover{color:#4f5bd5;-webkit-filter:brightness(120%);filter:brightness(120%);-webkit-transition:color .3s ease-in-out;-o-transition:color .3s ease-in-out;transition:color .3s ease-in-out}ul.insta-footer.insta-footer-right{text-align:right}@media only screen and (max-width: 800px){ul.insta-footer.insta-footer-right{text-align:left}}.pay-coffee{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:12px;font-size:14px;font-weight:400;color:#f5f5f5;text-decoration:none;background:-webkit-gradient(linear, left top, left bottom, from(#303b46), to(#1d252a));background:-webkit-linear-gradient(top, #303b46 0%, #1d252a 100%);background:-o-linear-gradient(top, #303b46 0%, #1d252a 100%);background:linear-gradient(180deg, #303b46 0%, #1d252a 100%);-webkit-box-shadow:0px 2px 2px rgba(0,0,0,.25);box-shadow:0px 2px 2px rgba(0,0,0,.25);padding:12px 20px 12px 60px;border-radius:4px;width:100%;line-height:0;-webkit-transition:-webkit-filter .3s ease-in-out;transition:-webkit-filter .3s ease-in-out;-o-transition:filter .3s ease-in-out;transition:filter .3s ease-in-out;transition:filter .3s ease-in-out, -webkit-filter .3s ease-in-out}.pay-coffee svg{height:50px;position:absolute;top:50%;left:12px;-webkit-transform:translate(0, -50%);-o-transform:translate(0, -50%);transform:translate(0, -50%)}.pay-coffee:hover{text-decoration:none;-webkit-filter:brightness(120%);filter:brightness(120%)}.loading-block{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:50px;display:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.5);height:100%;width:100%;z-index:10000}.loading-block.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.donut{display:inline-block;border:4px solid #f5f5f5;border-left-color:#d62976;border-radius:50%;width:80px;height:80px;-webkit-animation:donut-spin 1s linear infinite;-o-animation:donut-spin 1s linear infinite;animation:donut-spin 1s linear infinite}@-webkit-keyframes donut-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes donut-spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes donut-spin{0%{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}'

// ----------------------------------------------
// Создаем элемент вставки структуры интерфейса
// ----------------------------------------------
let div = document.createElement('div')
div.innerHTML = '<div class="insta-wrapper"><div class="insta-modal-wrap"><div class="insta-modal"><div class="insta-header"><div class="insta-title">instapi<span>сбор подписчиков и подписок</span></div><div class="insta-close j-insta-close"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.12138 0.292893C1.73086 -0.0976311 1.09769 -0.0976311 0.707168 0.292893C0.316644 0.683417 0.316644 1.31658 0.707168 1.70711L11.5416 12.5416L0.292893 23.7903C-0.0976311 24.1809 -0.0976311 24.814 0.292893 25.2046C0.683418 25.5951 1.31658 25.5951 1.70711 25.2046L12.9559 13.9558L24.0417 25.0416C24.4322 25.4322 25.0654 25.4322 25.4559 25.0416C25.8464 24.6511 25.8464 24.0179 25.4559 23.6274L14.3701 12.5416L25.0416 1.87003C25.4322 1.4795 25.4322 0.846339 25.0416 0.455815C24.6511 0.0652907 24.0179 0.0652907 23.6274 0.455815L12.9559 11.1274L2.12138 0.292893Z" fill="#F5F5F5"/></svg></div></div><div class="insta-section"><div class="insta-col"><div class="insta-col-content">Внимание: во избежание блокировки - старайтесь не использовать личный аккаунт для сбора данных и не превышайте лимиты Instagram. Сбор данных осуществляется только с открытого аккаунта, либо вы должны быть на него подписаны.</div></div></div><div class="insta-section"><div class="insta-row insta-start"><div class="insta-col divider"><div class="insta-col-content"><div class="insta-account"><div class="insta-account-image"><img class="j-account-image"><div class="insta-insta-back"></div><div class="insta-black-back"></div></div><div class="insta-account-data"><div class="insta-account-name j-account-name">Имя аккаунта</div><div class="insta-account-id">ID аккаунта:<span class="j-account-id">0</span></div><div class="insta-account-private j-account-private">Доступность</div><div class="insta-account-followers">Подписчики:<span class="j-account-followers">0</span></div><div class="insta-account-following">Подписки:<span class="j-account-following">0</span></div><div class="insta-account-posts">Публикации:<span class="j-account-posts">0</span></div></div></div></div></div><div class="insta-col divider"><div class="insta-col-content"><div class="insta-col-name">Сбор данных:</div><div class="insta-radio-group"><div class="insta-radio"><input form="instaParseForm" id="radio-one" type="radio" name="instaRadioParse" class="j-radio-followers" value="followers" checked="checked"><label for="radio-one"><div>Подписчики</div><span>Сбор подписчиков</span></label></div><div class="insta-radio"><input form="instaParseForm" id="radio-two" type="radio" name="instaRadioParse" class="j-radio-following" value="following"><label for="radio-two"><div>Подписки</div><span>Сбор подписок</span></label></div></div><div class="insta-star">при переключении будет сброшен текущий сбор и файл данных</div></div></div><div class="insta-col divider"><div class="insta-col-content"><div class="insta-col-name">Формат данных:</div><div class="insta-radio-group"><div class="insta-radio"><input form="instaSaveForm" id="radio-three" type="radio" name="instaRadioFormat" class="j-radio-json" value="json" checked="checked"><label for="radio-three"><div>Формат JSON</div><span>Данные в формате JSON</span></label></div><div class="insta-radio"><input form="instaSaveForm" id="radio-four" type="radio" name="instaRadioFormat" class="j-radio-excel" value="csv"><label for="radio-four"><div>Формат Excel (CSV)</div><span>Данные в формате CSV</span></label></div></div><div class="insta-star">переключать формат и скачивать данные, можно в любой момент</div></div></div></div></div><div class="insta-section"><div class="insta-row"><div class="insta-col"><div class="insta-col-content"><div class="insta-col-name">Ограничение кол-ва запросов</div><div class="insta-col-desc">Лимиты Instagram: в сутки не более 150-500 запросов на сбор данных (это примерно 15-50К аккаунтов). Чтобы полностью убрать ограничение парсера - очистите значение в поле или поставьте 0.</div></div></div><div class="insta-col insta-left"><div class="insta-request"><input form="instaParseForm" type="number" class="j-request-count" name="instaRequestCount" value="150"></div></div></div></div><div class="insta-section"><div class="insta-row"><div class="insta-col"><div class="insta-col-content"><div class="insta-col-name">Имитация человека</div><div class="insta-col-desc">Отправка запросов с разными интервалами (1-8 сек). По умолчанию запросы отправляюся без задержек. Включите, чтобы уменьшить риск блокировки, но время сбора данных увеличится.</div></div></div><div class="insta-col insta-left"><div class="insta-checkbox"><input form="instaParseForm" type="checkbox" name="instaImitation" id="insta-imitation" class="j-insta-imitation"><label for="insta-imitation"></label></div></div></div></div><div class="insta-section"><div class="insta-row insta-center"><div class="insta-col"><div class="insta-col-content"><div class="insta-col-name">Точка остановки</div><div class="insta-col-desc">Данный код служит отметкой кол-ва собранных аккаунтов. Чтобы продолжить сбор с места прерывания - сохраните код. Код служит, чтобы продолжить сбор минуя кол-во уже собранных аккаунтов.</div><div class="insta-endpoint"><input form="instaParseForm" type="text" name="instaEndPoint" class="j-endpoint-code" value=""><a class="insta-btn j-copy-btn">Скопировать</a></div></div></div><div class="insta-col"><div class="insta-start-wrapper"><form id="instaParseForm"><button form="instaParseForm" class="insta-start-emitter j-insta-start">Старт</button></form><div class="insta-start-wave"></div></div></div></div></div><div class="insta-section"><div class="insta-row insta-center"><div class="insta-col"><div class="insta-col-content"><ul class="insta-console"><li>Кол-во запросов:<span class="j-request-total">0</span></li><li>Собрали аккаунтов:<span class="j-accounts-total">0</span></li><li>Время сбора:<span class="j-time-total">00:00:00</span></li></ul></div></div><div class="insta-col"><form id="instaSaveForm"><a class="insta-btn j-download-btn">Скачать данные</a></form></div></div></div><div class="insta-section"><div class="insta-row"><div class="insta-col"><ul class="insta-footer"><li>version:<span class="j-version"></span></li><li><a class="insta-link" href="https://leoneed.pro" target="_blank">Леонид Залюбовский</a></li></ul></div><div class="insta-col"><ul class="insta-footer insta-footer-right"><li>Made with Love & Coffee in Russia</li></ul></div></div></div><div class="insta-background"><svg viewBox="0 0 910 906" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M607.974 0.758794L688.366 0.758787L768.759 0.758795L909.492 905.759L786.175 905.759L666.605 104.786L31.5287 905.763L0.590564 905.759L0.590554 751.397L607.974 0.758794Z" fill="#475461" fill-opacity="0.08"/></svg></div><div class="loading-block"><div class="donut"></div></div></div></div></div>'

// ----------------------------------------------
// Добавляем элементы стилей, структуры в DOM
// ----------------------------------------------
style.className = 'j-instapi'
div.className = 'j-instapi'
document.body.append(style)
document.body.append(div)

// вставка версии продукта в интерфейс
document.querySelectorAll('.j-version').forEach(function (e) {
    e.innerHTML = '1.0'
})
// добавим статус загрузки при включении
document.querySelector('.loading-block').classList.add('active')

// ----------------------------------------------
// ПЕРЕМЕННЫЕ
// ----------------------------------------------
// кол-во отправленных запросов
var requestTotal = 0
// состояние кнопки имитации
var instaImitation = false
// переменная массив собранных данных
var exportData = []
// переменная информации по аккаунту
var accountData
// переменная таймера сбора
var timer
// переменная управления имитацией (для отмены)
var imitationDelay = false
// переменная имя аккаунта
var accountName
// формируем строку разделителя для вывода в консоли
var consoleDivider = []
consoleDivider[50] = '-'
consoleDivider = consoleDivider.fill('-').join('')

// ----------------------------------------------
// Событие: При нажатии на кнопку закрытия окна
// ----------------------------------------------
document.querySelector('.j-insta-close').onclick = function() {
    document.querySelectorAll('.j-instapi').forEach(e => e.remove())
}

// ----------------------------------------------
// Событие: При нажатии кнопки Скопировать точку остановки
// ----------------------------------------------
document.querySelector('.j-copy-btn').onclick = function() {
    navigator.clipboard.writeText(document.querySelector('.j-endpoint-code').value)
    .then(() => {
        console.log('Точка остановки скопирована в буфер обмена')
    })
    .catch(err => {
        console.error('Ошибка копирования точки остановки:', err)
    })
}

// ----------------------------------------------
// Функция: определение имени аккаунта
// ----------------------------------------------
function getAccountName() {
    accountName = new URL(window.location.href)
    accountName = accountName.pathname.replace(/^\/|\/$/g, '')
    console.log('Определяем имя аккаунта:', accountName)
    if (accountName !== '') {
        return parseInfoAccount(accountName)
    } else {
        console.error('Ошибка: перейдите на страницу аккаунта')
    }
}

// ----------------------------------------------
// Функция: сбор информации об аккаунте
// ----------------------------------------------
async function parseInfoAccount(accountName) {
    try {
        let resp = await fetch('https://www.instagram.com/api/v1/users/web_profile_info/?username=' + accountName, {
            'headers': {
                'x-ig-app-id': '936619743392459',
                'x-requested-with': 'XMLHttpRequest'
            }
        })
        console.log('Сбор информации об аккаунте | cтатус запроса: ', resp.status)
        if (resp.status === 200) {
            accountData = await resp.json()
            // запускаем функцию обновления данных в интерфейсе
            return updateAccountInfo(accountData)
        }else if (resp.status === 404) {
            console.error('Ошибка: перейдите на страницу аккаунта', resp.status)
        }else if (resp.status === 429) {
            console.error('Ошибка: превышены лимиты Instagram', resp.status)
        } else {
            console.error('Ошибка:', resp.status)
        }
    } catch(e) {
        console.error('Ошибка:', e.name + ":" + e.message + "\n" + e.stack)
    }
}

// ----------------------------------------------
// Функция: обновление данных аккаунта в интерфейсе
// ----------------------------------------------
function updateAccountInfo(accountData) {
    // выводим данные в консоль
    //выводим все варианты 3-его уровня вложенности - получаем accountData['data']['user'] = объект
    console.dir(accountData['data']['user']);


    // обновление: Имя аккаунта
    document.querySelector('.j-account-name').innerHTML = accountData['data']['user']['username']
    // обновление: ID аккаунта
    document.querySelector('.j-account-id').innerHTML = accountData['data']['user']['id']
    // обновление: Изображение
    document.querySelector('.j-account-image').src = accountData['data']['user']['profile_pic_url']
    // обновление: Кол-во подписчиков
    document.querySelector('.j-account-followers').innerHTML = accountData['data']['user']['edge_followed_by']['count']
    // обновление: Кол-во Подписок
    document.querySelector('.j-account-following').innerHTML = accountData['data']['user']['edge_follow']['count']
    // обновление: Кол-во Публикаций
    document.querySelector('.j-account-posts').innerHTML = accountData['data']['user']['edge_owner_to_timeline_media']['count']
    // обновление: доступность с проверкой на открытый или закрытый аккаунт
    if (accountData['data']['user']['is_private'] === false) {
        document.querySelector('.j-account-private').innerHTML = 'Открытый'
        document.querySelector('.j-account-private').classList.add('insta-private-false')
    } else {
        // дополнительная проверка на подпись
        if (accountData['data']['user']['followed_by_viewer'] === false){
            document.querySelector('.j-account-private').innerHTML = 'Закрытый (подпишитесь)'
            document.querySelector('.j-account-private').classList.add('insta-private-true')
        } else {
            document.querySelector('.j-account-private').innerHTML = 'Закрытый (подписаны)'
            document.querySelector('.j-account-private').classList.add('insta-private-false')
        }
    }
    document.querySelector('.loading-block').classList.remove('active')
    return
}

// ----------------------------------------------
// Событие: Отслеживаем нажатие кнопок выбора сбора данных
// ----------------------------------------------
document.querySelectorAll('input[name=instaRadioParse]').forEach(function (e) {
    // далее вешаем слушатель на изменения
    e.addEventListener('change', function () {
        // сбрасываем данные, если сменили кнопку
        if (this.checked) {
            console.log('Сменили кнопку cбора | cбрасываем данные', this.value)
            // сброс собранных подписчиков
            exportData = []
            // сброс поля точки остановки
            document.querySelector('.j-endpoint-code').value = ''
            // сброс кол-ва собранных аккаунтов
            document.querySelector('.j-accounts-total').innerHTML = 0
            // сброс времени сбора
            document.querySelector('.j-time-total').innerHTML = '00:00:00'
        }
        // сбрасываем состояние кнопки, если в ready
        if (document.querySelector('.insta-start-wrapper').classList.contains('ready')) {
            document.querySelector('.insta-start-wrapper').classList.remove('ready')
            document.querySelector('.j-insta-start').innerHTML = 'Старт'
        }
    })
})

// ----------------------------------------------
// Функция: Изменение кнопки СТАРТ
// ----------------------------------------------
function toggleStart() {
    // сразу меняем цвет кнопки
    document.querySelector('.insta-start-wrapper').classList.toggle('toggle')

    // меняем надпись на кнопке с проверкой
    if (document.querySelector('.insta-start-wrapper').classList.contains('toggle')) {
        document.querySelector('.j-insta-start').innerHTML = 'Стоп'
        
        // блокируем вторую кнопку выбора сбора данных
        document.querySelectorAll('input[name=instaRadioParse]').forEach(function (e) {
            if (!e.checked) {
                e.setAttribute('disabled', 'true')
            }
        })
    } else {
        document.querySelector('.j-insta-start').innerHTML = 'Старт'

        // разблокируем вторую кнопку выбора сбора данных
        document.querySelectorAll('input[name=instaRadioParse]').forEach(function (e) {
            if (!e.checked) {
                e.removeAttribute('disabled')
            }
        })
    }
    // проверяем на содержание класса ready
    if (document.querySelector('.insta-start-wrapper').classList.contains('ready')) {
        document.querySelector('.j-insta-start').innerHTML = 'Готово'
    }
}

// ----------------------------------------------
// Событие: Обрабатываем нажатие кнопки СТАРТ
// ----------------------------------------------
document.querySelector('.j-insta-start').onclick = function(event) {
    document.querySelector('.insta-start-wrapper').classList.remove('ready')
    // меняем toggle
    toggleStart()
    event.preventDefault()

    // нажали на СТАРТ
    if (document.querySelector('.insta-start-wrapper').classList.contains('toggle')) {

        // собираем данные с формы
        var formData = new FormData(document.querySelector('#instaParseForm'))
        var paramParse = {}
        formData.forEach((value, key) => paramParse[key] = value)
        parseData(paramParse, accountData['data']['user']['id'])
    // нажали на СТОП
    } else {
        // если имитация содержит значение
        if (imitationDelay !== false) {
            // принудительно завершаем
            imitationDelay.cancel()
            imitationDelay = false
        }
    }
}

// ----------------------------------------------
// Слушатель: Отслеживаем нажатие кнопки имитации во время сбора
// ----------------------------------------------
document.querySelector('.j-insta-imitation').addEventListener('change', function () {
    if (this.checked){
        // Имитация: включена
        instaImitation = true
    } else {
        // Имитация: выключена
        instaImitation = false
    }
})

// ----------------------------------------------
// Функция: Управление имитацией (таймаут перед запросом)
// а также отмена действия имитации на основе промисов
// ----------------------------------------------
function imitationStart(ms) {
    var timeout, promise
    promise = new Promise(function(resolve) {
        timeout = setTimeout(resolve, ms)
    })
    return {
        promise:promise,
        cancel:function(){clearTimeout(timeout), imitationStop()}
    }
  }

// ----------------------------------------------
// Функция: Принудительная остановка при имитации
// ----------------------------------------------
  function imitationStop() {
    clearInterval(timer)
    console.log(consoleDivider)
    console.log('Сбор завершен | Кол-во собранных аккаунтов: ' + exportData.length)
    console.log(consoleDivider)
  }

// ----------------------------------------------
// Функция: Сбор данных подписчиков/подписок
// ----------------------------------------------
async function parseData(paramParse, accountId) {
    // таймер текущего сбора данных
    var H = '00', M = '00', S = '00'
    timer = setInterval(function(){
        S = +S +1
        // если результат меньше 10, прибавляем впереди строку '0'
        if(S < 10) {S = '0' + S}
        if(S == 60) {
            S = '00'
            // как только секунд стало 60, добавляем +1 к минутам
            M = +M + 1
            // дальше то же самое, что и для секунд
            if(M < 10) {M = '0' + M}
            if(M == 60) {
                // как только минут стало 60, добавляем +1 к часам.
                M = '00'
                H = +H + 1
                if(H < 10) {H = '0' + H}
            }
        }
        document.querySelector('.j-time-total').innerText = H+':'+M+':'+S
    },1000)

    // кол-во запросов если сняты ограничения
    // для подписчиков
    if (paramParse['instaRadioParse'] === 'followers') {
        if (paramParse['instaRequestCount'] === '' || paramParse['instaRequestCount'] === '0') {
            paramParse['instaRequestCount'] = accountData['data']['user']['edge_followed_by']['count']
        }
    }
    // для подписок
    if (paramParse['instaRadioParse'] === 'following') {
        if (paramParse['instaRequestCount'] === '' || paramParse['instaRequestCount'] === '0') {
            paramParse['instaRequestCount'] = 150
        }
    }

    // проверка на повторный сбор
    // если точка остановки не задана и есть собранные аккаунты, то сбрасываем данные
    if (paramParse['instaEndPoint'] === '' && exportData.length > 0) {
        console.log('Обнаружен повторный сбор | сбрасываем данные')
        exportData = []
    }

    // создаем цикл из указанного кол-ва запросов
    for (let i = 0; i < paramParse['instaRequestCount']; i++) {
        // если изменился статус кнопки выходим из цикла
        // если нажата кнопка СТОП в цикле
        if (!document.querySelector('.insta-start-wrapper').classList.contains('toggle')) {
            break
        }

        // перед запросом проверяем включена ли имитация
        if (instaImitation === true) {
            // создаём рэндомные интервалы
            var imitRandom = Math.floor((Math.random() * 7) + 1) * 1000
            console.log('Имитация | время задержки: ' +imitRandom/1000+' сек.')
            // используем промисы
            imitationDelay = imitationStart(imitRandom)
            await imitationDelay.promise.then(() => {})
        }

        var url = 'https://www.instagram.com/api/v1/friendships/'
        var urlParse = url + accountId + '/' + paramParse['instaRadioParse'] + '/?count=100&max_id=' + paramParse['instaEndPoint']

        try {
            // отправка запроса
            var resp = await fetch(urlParse, {
                'headers': {
                    'x-ig-app-id': '936619743392459',
                    'x-requested-with': 'XMLHttpRequest'
                }
            })

            // если статус запроса 200
            if (resp.status === 200) {
                var jsonData = await resp.json()
                // увеличиваем на 1 кол-во запросов и отправляем в интерфейс
                requestTotal = requestTotal + 1
                document.querySelector('.j-request-total').innerHTML = requestTotal
                // добавляем полученные данные в json переменную
                for (let x in jsonData['users']) {
                    exportData.push(jsonData['users'][x])
                }
                // обновляем кол-во собранных аккаунтов в интерфейсе
                console.log('Статус запроса: 200 | собрали аккаунтов:', exportData.length)
                document.querySelector('.j-accounts-total').innerHTML = exportData.length
                // проверяем на наличие точки остановки при последующем сборе
                // обновляем поле точки остановки и присваеваем значение переменной
                if(jsonData['next_max_id']) {
                    console.log('Точка остановки:', jsonData['next_max_id'])
                    document.querySelector('.j-endpoint-code').value = jsonData['next_max_id']
                    paramParse['instaEndPoint'] = jsonData['next_max_id']
                } else {
                    console.log('Точка остановки: конечная | сбрасываем поле')
                    paramParse['instaEndPoint'] = ''
                    document.querySelector('.j-endpoint-code').value = ''
                    document.querySelector('.insta-start-wrapper').classList.add('ready')
                    break
                }
            } else if (resp.status === 429) {
                console.error('Ошибка сбора данных:', 'превышены лимиты Instagram', resp.status)
                break
            } else {
                console.error('Ошибка сбора данных:', resp.status)
                break
            }
        } catch(e) {
            console.error('Ошибка сбора данных:', e.name + ":" + e.message + "\n" + e.stack)
            break
        }
    }
    // останавливаем таймер
    clearInterval(timer)
    // меняем состояние кнопки на ready
    if (document.querySelector('.insta-start-wrapper').classList.contains('toggle')) {
        document.querySelector('.insta-start-wrapper').classList.add('ready')
        toggleStart()
    }
    console.log(consoleDivider)
    console.log('Сбор завершен | Кол-во собранных аккаунтов: ' + exportData.length)
    console.log(consoleDivider)
}

// ----------------------------------------------
// Событие: При нажатии кнопки "Скачать данные"
// формируем файл для скачивания
// ----------------------------------------------
document.querySelector('.j-download-btn').onclick = function() {
    // удаляем атрибуты кнопки
    this.removeAttribute('href')
    this.removeAttribute('download')
    // собираем данные с формы
    var formData = new FormData(document.querySelector('#instaSaveForm'))
    var paramSave = {}
    formData.forEach((value, key) => paramSave[key] = value)

    // если выбрали json
    if (paramSave['instaRadioFormat'] === 'json') {
        // проверяем на наличие данных и скачиваем
        if(exportData.length > 0) {
            // формируем файл для скачивания
            var fileData = new Blob([JSON.stringify(exportData)], {type: 'application/json;charset=utf-8'})
            this.setAttribute('href', URL.createObjectURL(fileData))
            this.setAttribute('download', accountName + '.json')
        } else {
            console.error('Ошибка: нет данных для скачивания | запустите сбор')
        }
    }

    // если выбрали csv
    if (paramSave['instaRadioFormat'] === 'csv') {
        // проверяем на наличие данных, ковертируем JSON в CSV и скачиваем
        if(exportData.length > 0) {
            // функция выборки массива данных под CSV
            function selectCsv(arr) {
                var makeMap = new Map()
                // функция установки значений
                function setValue(dataKey, path, val) {
                    if (Object(val) !== val) {
                        var pathStr = path.join('')
                        var i = (makeMap.has(pathStr) ? makeMap : makeMap.set(pathStr, makeMap.size)).get(pathStr)
                        dataKey[i] = val
                    } else {
                        for (var key in val) {
                            setValue(dataKey, key == '0' ? path : path.concat(key), val[key])
                        }
                    }
                    return dataKey
                }
                var result = arr.map( obj => setValue([], [], obj) )
                return [[...makeMap.keys()], ...result]
            }

            // Функция создания CSV
            function makeCsv(arr) {
                return arr.map( row => row.map ( val => JSON.stringify(val)).join(';')).join('\n').split('"').join('')
            }

            var csv = makeCsv(selectCsv(exportData))

            // формируем файл для скачивания
            var fileData = new Blob(['\ufeff'+csv], {type: 'text/csv;charset=utf-8'})
            this.setAttribute('href', URL.createObjectURL(fileData))
            this.setAttribute('download', accountName + '.csv')

        } else {
            console.log('Ошибка: нет данных для скачивания | запустите сбор')
        }
    }
}

// ----------------------------------------------
// Запуск функции сбора информации по аккаунту
// ----------------------------------------------
getAccountName()