package swagger

import (
)

type CreateTransferRequest struct {
    Amount  Number  `json:"amount,omitempty"`
Origin  AccountID  `json:"origin,omitempty"`
Destination  AccountID  `json:"destination,omitempty"`
}
