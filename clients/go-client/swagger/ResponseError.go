package swagger

import (
)

type ResponseError struct {
    Message  string  `json:"message,omitempty"`
Error_  string  `json:"error,omitempty"`
Code  int32  `json:"code,omitempty"`
}
