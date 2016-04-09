package io.swagger.client.model;

import io.swagger.client.model.AccountID;
import java.math.BigDecimal;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class CreateTransferRequest  {
  
  @SerializedName("amount")
  private BigDecimal amount = null;
  @SerializedName("origin")
  private AccountID origin = null;
  @SerializedName("destination")
  private AccountID destination = null;

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
  public AccountID getOrigin() {
    return origin;
  }
  public void setOrigin(AccountID origin) {
    this.origin = origin;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public AccountID getDestination() {
    return destination;
  }
  public void setDestination(AccountID destination) {
    this.destination = destination;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateTransferRequest {\n");
    
    sb.append("  amount: ").append(amount).append("\n");
    sb.append("  origin: ").append(origin).append("\n");
    sb.append("  destination: ").append(destination).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
