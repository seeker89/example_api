package io.swagger.client.model;


import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class AccountID  {
  
  @SerializedName("number")
  private String number = null;

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public String getNumber() {
    return number;
  }
  public void setNumber(String number) {
    this.number = number;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountID {\n");
    
    sb.append("  number: ").append(number).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
