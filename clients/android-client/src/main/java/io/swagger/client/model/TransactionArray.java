package io.swagger.client.model;

import io.swagger.client.model.Transaction;
import java.util.*;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class TransactionArray  {
  
  @SerializedName("transactions")
  private List<Transaction> transactions = null;

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public List<Transaction> getTransactions() {
    return transactions;
  }
  public void setTransactions(List<Transaction> transactions) {
    this.transactions = transactions;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionArray {\n");
    
    sb.append("  transactions: ").append(transactions).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
