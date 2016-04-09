package io.swagger.client.model;

import io.swagger.client.model.Account;
import java.util.*;
import java.util.Date;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Customer  {
  
  @SerializedName("created")
  private Date created = null;
  @SerializedName("name")
  private String name = null;
  @SerializedName("id")
  private String id = null;
  @SerializedName("accounts")
  private List<Account> accounts = null;

  /**
   * can't be overwritten
   **/
  @ApiModelProperty(value = "can't be overwritten")
  public Date getCreated() {
    return created;
  }
  public void setCreated(Date created) {
    this.created = created;
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

  /**
   **/
  @ApiModelProperty(value = "")
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public List<Account> getAccounts() {
    return accounts;
  }
  public void setAccounts(List<Account> accounts) {
    this.accounts = accounts;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Customer {\n");
    
    sb.append("  created: ").append(created).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  id: ").append(id).append("\n");
    sb.append("  accounts: ").append(accounts).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
