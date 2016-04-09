package io.swagger.client.model;

import io.swagger.client.model.CustomerID;
import java.math.BigDecimal;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


/**
 * Both the amount and customer are required. If you need to create a new account with no amount on it, just set the amount to 0.\n
 **/
@ApiModel(description = "Both the amount and customer are required. If you need to create a new account with no amount on it, just set the amount to 0.\n")
public class CreateAccountRequest  {
  
  @SerializedName("amount")
  private BigDecimal amount = null;
  @SerializedName("customer")
  private CustomerID customer = null;
  @SerializedName("name")
  private String name = null;

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
  @ApiModelProperty(required = true, value = "")
  public CustomerID getCustomer() {
    return customer;
  }
  public void setCustomer(CustomerID customer) {
    this.customer = customer;
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
    sb.append("class CreateAccountRequest {\n");
    
    sb.append("  amount: ").append(amount).append("\n");
    sb.append("  customer: ").append(customer).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
