package swagger

import (
    "time"
)

type Transaction struct {
    Amount  Number  `json:"amount,omitempty"`
Origin  AccountID  `json:"origin,omitempty"`
Destination  AccountID  `json:"destination,omitempty"`
ExecutedAt  time.Time  `json:"executedAt,omitempty"`
}
