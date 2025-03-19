// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function get_template_A_str(user_info)
{
  let str = "";

  str += '<div style="font-family: \'Aptos\', Verdana, sans-serif; font-size: 14px !important;">';
  str +=   "<br>";
  str +=   is_valid_data(user_info.greeting) ? `<div style='margin-bottom: 10px;'>${user_info.greeting},</div>` : "";
  str +=   "<div><strong style='color: #F6688A;'>" + user_info.name + "</strong>";
  str +=   is_valid_data(user_info.pronoun) ? ` ${user_info.pronoun}` : "";
  str +=   "</div>";
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str +=   "<br>";
  str +=   is_valid_data(user_info.phone) ? `<div>${user_info.phone}</div>` : "";
  str +=   "<div>Head Office: 42-44 Victoria Street, McMahons Point, NSW 2060</div>"
  str +=   "<div style='margin-bottom: 10px;'><a href='https://www.endemolshine.com.au' target='_blank'>Endemol Shine Australia</a></div>";
  str +=   "<div style='display: flex; flex-direction: column;'>";
  str +=    "<img height='90' width='380' style='margin-bottom: 8px;' src='https://cdn.endemolshine.com.au/assets/img/esa_email_signature_rotating.gif' alt='Endemol Shine Australia' />";
  str +=    "<img height='25' width='230' src='https://cdn.endemolshine.com.au/assets/img/esa-logo-wide.jpg' alt='Logo' />";
  str +=   "</div>";
  str +=   "<div style='margin-top: 10px; font-size: xx-small; font-style: italic;'>This electronic mail, including any attachments, is intended for the addressee only and may contain information that is either confidential or subject to legal professional privilege. Unauthorised reproduction, use or disclosure of the contents of this mail is prohibited. If you have received this mail in error, please delete it from your system immediately and notify Endemol Shine Australia by contacting us at <a href='https://www.endemolshine.com.au'>www.endemolshine.com.au</a>.</div>";
  str += "</div>";

  return str;
}



function get_template_B_str(user_info)
{
  let str = "";

  str += '<div style="font-family: \'Aptos\', Verdana, sans-serif; font-size: 14px !important;">';
  str +=   "<br>";
  str +=   is_valid_data(user_info.greeting) ? `<div style='margin-bottom: 10px;'>${user_info.greeting},</div>` : "";
  str +=   "<div><strong style='color: #F6688A;'>" + user_info.name + "</strong>";
  str +=   is_valid_data(user_info.pronoun) ? ` ${user_info.pronoun}` : "";
  str +=   "</div>";
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str +=  "</div>";

  return str;
}

/* function get_template_C_str(user_info)
{
  
} */