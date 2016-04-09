package io.swagger.client.model;

import java.math.BigDecimal;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Account  {
  
  @SerializedName("number")
  private String number = null;
  @SerializedName("amount")
  private BigDecimal amount = null;
  @SerializedName("ownerId")
  private String ownerId = null;
  @SerializedName("name")
  private String name = null;

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public String getNumber() {
    return number;
  }
  public void setNumber(String number) {
    this.number = number;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getAmount() {
    return amount;
  }
  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getOwnerId() {
    return ownerId;
  }
  public void setOwnerId(String ownerId) {
    this.ownerId = ownerId;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Account {\n");
    
    sb.append("  number: ").append(number).append("\n");
    sb.append("  amount: ").append(amount).append("\n");
    sb.append("  ownerId: ").append(ownerId).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
