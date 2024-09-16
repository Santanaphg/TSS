<?php


function email($name,$email,$subject,$message){


    return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=320, initial-scale=1" />
      <title>Airmail Confirm</title>
      <style type="text/css">
    
        /* ----- Client Fixes ----- */
    
        /* Force Outlook to provide a "view in browser" message */
        #outlook a {
          padding: 0;
        }
    
        /* Force Hotmail to display emails at full width */
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        /* Force Hotmail to display normal line spacing */
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
    
    
         /* Prevent WebKit and Windows mobile changing default text sizes */
        body, table, td, p, a, li, blockquote {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        /* Remove spacing between tables in Outlook 2007 and up */
        table, td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
        /* Allow smoother rendering of resized image in Internet Explorer */
        img {
          -ms-interpolation-mode: bicubic;
        }
    
         /* ----- Reset ----- */
    
        html,
        body,
        .body-wrap,
        .body-wrap-cell {
          margin: 0;
          padding: 0;
          background: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #464646;
          text-align: left;
        }
    
        img {
          border: 0;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
    
        table {
          border-collapse: collapse !important;
        }
    
        td, th {
          text-align: left;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #464646;
          line-height:1.5em;
        }
    
        b a,
        .footer a {
          text-decoration: none;
          color: #464646;
        }
    
        a.blue-link {
          color: blue;
          text-decoration: underline;
        }
    
        /* ----- General ----- */
    
        td.center {
          text-align: center;
        }
    
        .left {
          text-align: left;
        }
    
        .body-padding {
          padding: 24px 40px 40px;
        }
    
        .border-bottom {
          border-bottom: 1px solid #D8D8D8;
        }
    
        table.full-width-gmail-android {
          width: 100% !important;
        }
    
    
        /* ----- Header ----- */
        .header {
          font-weight: bold;
          font-size: 16px;
          line-height: 16px;
          height: 16px;
          padding-top: 19px;
          padding-bottom: 7px;
        }
    
        .header a {
          color: #464646;
          text-decoration: none;
        }
    
        /* ----- Footer ----- */
    
        .footer a {
          font-size: 12px;
        }
      </style>
    
      <style type="text/css" media="only screen and (max-width: 650px)">
        @media only screen and (max-width: 650px) {
          * {
            font-size: 16px !important;
          }
    
          table[class*="w320"] {
            width: 320px !important;
          }
    
          td[class="mobile-center"],
          div[class="mobile-center"] {
            text-align: center !important;
          }
    
          td[class*="body-padding"] {
            padding: 20px !important;
          }
    
          td[class="mobile"] {
            text-align: right;
            vertical-align: top;
          }
        }
         
      </style>
    
    </head>
    <body style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
    
    
 
    <div class="contact-inputs"> 

          <div class="contact-header">
          <div class="form__content" id="form__content-name">           
            <div class="form__content-input">
              <h2 style="color:red">From:</h2><h3>'.$name.'</h3>
          
            </div>          
          </div>

          <div class="form__content" id="form__content-email">           
            <div class="form__content-input">
              <h2 style="color:red">Email:</h2><h3>'.$email.'</h3> 
            </div>          
          </div>
        </div>  

          <div class="form__content-subject" id="form__content-subject">
            
            <div class="form__content-input">
              <h2 style="color:red">Subject:</h2><h3>'.$subject.' </h3> 
             
            </div>
           
          </div>

      
        <div class="contact-textarea">
         <h2 style="color:red">Message:</h2><h3> '.$message.'</h3>
        </div>
    </body>
    </html>';

}