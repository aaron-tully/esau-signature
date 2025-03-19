// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function get_template_A_str(user_info)
{
  let str = "";

  str += "<div>";
  str +=   is_valid_data(user_info.greeting) ? `<div style='margin-bottom: 10px;'>${user_info.greeting},</div>` : "";
  str +=   "<div><strong style='color: #F6688A;'>" + user_info.name + "</strong>";
  str +=   is_valid_data(user_info.pronoun) ? ` ${user_info.pronoun}` : "";
  str +=   "</div>";
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str +=   "<br>";
  str +=   "<div>" + user_info.email + "</div>";
  str +=   is_valid_data(user_info.phone) ? `<div>${user_info.phone}</div>` : "";
  str +=   is_valid_data(user_info.department) ? `<div>${user_info.department}</div>` : "";
  str +=   is_valid_data(user_info.location) ? `<div>${user_info.location}</div>` : "";
  str +=   "<div style='margin-bottom: 10px;'><a href='https://www.endemolshine.com.au' target='_blank'>Endemol Shine Australia</a></div>";
  str +=   "<img src='https://aarontully.github.io/ESA-Signature-Addin/assets/sig_image.png' alt='Logo' />";
  str += "</div>";

  return str;
}



function get_template_B_str(user_info)
{
  let str = "";
  str += "<div>";
  str +=   is_valid_data(user_info.greeting) ? `${user_info.greeting},<br>` : "";
  str +=   "<div><strong style='color: #F6688A;>" + user_info.name + "</strong>";
  str +=   is_valid_data(user_info.pronoun) ? ` ${user_info.pronoun}` : "";
  str +=   "</div>";
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str +=  "/div>";

  return str;
}

/* function get_template_C_str(user_info)
{
  
} */