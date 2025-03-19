// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function get_template_A_str(user_info)
{
  let str = "";

  str += "<div>";
  str +=   is_valid_data(user_info.greeting) ? `${user_info.greeting},<br>` : "";
  str +=   "<div><strong style='color: #FF4370;>" + user_info.name + "</strong>";
  str +=   is_valid_data(user_info.pronoun) ? ` ${user_info.pronoun}` : "";
  str +=   "</div>";
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str +=   "<br>";
  str +=   "<div>" + user_info.email + "</div>";
  str +=   is_valid_data(user_info.phone) ? `<div>${user_info.phone}</div>` : "";
  str +=   is_valid_data(user_info.department) ? `<div>${user_info.department}</div>` : "";
  str +=   is_valid_data(user_info.location) ? `<div>${user_info.location}</div>` : "";
  str +=   "<a href='https://www.endemolshine.com.au' target='_blank'>Endemol Shine Australia</a>";
  str +=   "<br>";
  str +=   "<img src='https://aarontully.github.io/ESA-Signature-Addin/assets/sig_image.png' alt='Logo' />";
  str += "</div>";

  return str;
}



function get_template_B_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting)) {
    str += user_info.greeting + "<br>";
  }

  str += "<br>";
  str += `<div style='color: #FF4370;'>${user_info.name}</div>`;
  str +=   is_valid_data(user_info.job) ? `<div>${user_info.job}</div>` : "";
  str += "<br>";

  return str;
}

/* function get_template_C_str(user_info)
{
  
} */