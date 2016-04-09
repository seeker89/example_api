package io.swagger.client.model;

import java.util.Date;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


/**
 * Useful for debugging - pinging your servers and seeing how long is it, that they&#39;ve been up.\n
 **/
@ApiModel(description = "Useful for debugging - pinging your servers and seeing how long is it, that they've been up.\n")
public class Stats  {
  
  @SerializedName("state")
  private String state = null;
  @SerializedName("startup")
  private Date startup = null;
  @SerializedName("uptime")
  private Integer uptime = null;

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public String getState() {
    return state;
  }
  public void setState(String state) {
    this.state = state;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public Date getStartup() {
    return startup;
  }
  public void setStartup(Date startup) {
    this.startup = startup;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public Integer getUptime() {
    return uptime;
  }
  public void setUptime(Integer uptime) {
    this.uptime = uptime;
  }


  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Stats {\n");
    
    sb.append("  state: ").append(state).append("\n");
    sb.append("  startup: ").append(startup).append("\n");
    sb.append("  uptime: ").append(uptime).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
