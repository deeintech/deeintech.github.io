# REST API for Paytomat Console Panel

Paytomat is a set of blockchain software solutions, used by merchants to accept cryptocurrencies in-store or online. Console Panel allows merchants to track such transactions, manage authentication tokens and generate invoices. You can use this API to integrate crypto payments to the existing point-of-sale systems, shopping carts or mobile apps.

## Table of contents
- [REST API for Paytomat Console Panel](#rest-api-for-paytomat-console-panel)
  * [General API Information](#general-api-information)
  * [Error Codes](#error-codes)
- [API authentication](#api-authentication)
  * [HTTP Basic authentication](#http-basic-authentication)
  * [JWT authentication](#jwt-authentication)
- [Basic Types](#basic-types)
    + [**int**](#--int--)
    + [**long**](#--long--)
    + [**boolean**](#--boolean--)
    + [**string**](#--string--)
    + [**float**](#--float--)
    + [**decimal**](#--decimal--)
    + [**dateTime**](#--datetime--)
    + [**object**](#--object--)
    + [[**object**]](#---object---)
- [API endpoints](#api-endpoints)
  * [JWT token](#jwt-token)
  * [Currency codes list](#currency-codes-list)
  * [Exchange rates list](#exchange-rates-list)
  * [Current balance](#current-balance)
  * [New transaction](#new-transaction)
  * [Cancel transaction](#cancel-transaction)
  * [Chargeback transaction](#chargeback-transaction)
  * [Transaction details](#transaction-details)
  * [List of transactions](#list-of-transactions)
  * [Transaction broadcast](#transaction-broadcast)
  * [Product details](#product-details)
  * [New product](#new-product)
  * [Update product](#update-product)
  * [Payment widget](#payment-widget)
- [Models:](#models-)
  * [General Models](#general-models)
    + [JWT](#jwt)
    + [Error](#error)
    + [Currency](#currency)
    + [Exchange Rates](#exchange-rates)
    + [Balance](#balance)
    + [Payment URL](#payment-url)
  * [Transaction Models](#transaction-models)
    + [Transaction Short](#transaction-short)
    + [Transaction Full](#transaction-full)
    + [Transaction Status](#transaction-status)
    + [Callback URL](#callback-url)
    + [Broadcast Code](#broadcast-code)
  * [Product Models](#product-models)
    + [Product](#product)
    + [Product Field](#product-field)
    + [Product Status](#product-status)

This is an improved version of the original API that can be found [here](https://app.paytomat.com/merchant_api.html).

## General API Information

* The base endpoint is: `https://app.paytomat.com/api/v1/`
* All endpoints always return a JSON object that contains a single object or an array of objects.
* Data is returned in ascending order. Oldest first, newest last.

## Error Codes

* Any API endpoint can return an error.
* Errors are always reported as JSON encoded object with `error` key. 
 
Sample payload:
```
{
  "error": "error_description"
}
```
# API authentication

* Paytomat API supports two types of authentication: [HTTP Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) and [JWT authentication](https://jwt.io). 
* For both types you need to create a merchant account in [Console Panel](https://console.paytomat.com) and pass basic verification.
* By default `username` or `login` is the `email` you used during registration of your merchant account. 
* If you want a separate login/password pair or JWT token, you can always create a new pair in [Console Panel](https://console.paytomat.com) in `Settings/Branches` tab with `Basic` or `Token` type accordingly.

## HTTP Basic authentication

To authenticate with HTTP, you may provide a username and password with the following URL format: `https://username:password@app.paytomat.com/api/v1`.

For HTTP Basic authentication, encode your login and password concatenated by a colon (`:`) with [Base64](https://en.wikipedia.org/wiki/Base64) encryption.

### Example HTTP header:
`Authorization: Basic cGVwZTp0aGVfcGln` where `cGVwZTp0aGVfcGln` is a Base64 phrase you generated above.

## JWT authentication

For JWT authentication, use JWT token you can find in [Console Panel](https://console.paytomat.com) in the `Settings/Branches` tab.

### Example HTTP header:
`Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwicmVhbG0iOiJtZXJjaGFudF9rZXkifQ.hTdblIJI6mcPCyZ5u9eiYI8e6tRJ5VRtU0AbLQ8WlAw`, where string after Bearer is JWT token.

### Example curl:

`curl 'https://app.paytomat.com/api/v1/balance' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwicmVhbG0iOiJtZXJjaGFudF9rZXkifQ.hTdblIJI6mcPCyZ5u9eiYI8e6tRJ5VRtU0AbLQ8WlAw'`

# Basic Types

### **int**

`20`

A standard JSON integer.

### **long**

`20`

A 64-bit two's complement JSON integer.

### **boolean**

`true`

A standard JSON boolean.

### **string**

`This suppose to be a text`

A standard JSON string. When POSTing data as `application/x-www-form-urlencoded`, use a UTF-8 encoded string instead rather than Unicode escapes.

### **float**

`13.839039`

A standard JSON floating-point decimal.

### **decimal**

`"13.83903987"`

An arbitrary-precision JSON decimal number encoded as a standard JSON string.

### **dateTime**

`"2020-02-03T17:00:00Z"`

Date and time as a string in ISO8601 combined date and time format in UTC (Coordinated Universal Time).

### **object**

```
{
  "rates": {
    "BTC":   "0.020903",
    "DASH":  "0.3338",
    "USD":   "241.81",
    "WAVES": "29.874"
  }
}
```

The standard base representation for first-class objects in Paytomat, such as [Product](#Product), [Balance](#Balance), [Error](#Error), etc.

### [**object**]

```
{
  "currencies": [
    {
      "code": "BTC",
      "in": true,
      "out": true,
      "title": "Bitcoin"
    },
    {
      "code": "UAH",
      "in": true,
      "out": false,
      "title": "Hryvnia"
    }
  ]
}
```

The standard base representation for an object that contains a list of first-class objects in Paytomat, such as [Product](#Product), [Balance](#Balance), [Error](#Error), etc.

# API endpoints

## JWT token

```
GET /token
```

Returns JWT token for given account's credentials.

### Parameters:
None

### Responses:

| Code    | Type            | Description            |
| ------- |:--------------- |:---------------------- |
| 200     | [JWT](#JWT)     | Success                |
| 400     | [Error](#Error) | Bad request            |
| default | [Error](#Error) | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/token'

//Result
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwicmVhbG0iOiJtZXJjaGFudF9rZXkifQ.hTdblIJI6mcPCyZ5u9eiYI8e6tRJ5VRtU0AbLQ8WlAw"
}
```

## Currency codes list

```
GET /currencies
```

Returns a list of available currency codes.
 
### Parameters:
None

### Responses:


| Code    | Type                    | Description            |
| ------- |:----------------------- |:---------------------- |
| 200     | [[Currency](#Currency)] | Success                |
| 400     | [Error](#Error)         | Bad request            |
| default | [Error](#Error)         | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/currencies'

//Result
{
  "currencies": [
    {
      "code": "BTC",
      "in": true,
      "out": true,
      "title": "Bitcoin"
    },
    {
      "code": "UAH",
      "in": true,
      "out": false,
      "title": "Hryvnia"
    }
  ]
}
``` 

## Exchange rates list

```
GET /exchange_rates
```

Returns an object of currency exchange rates for a given currency.

### Parameters: 
| Name     | Type   | Required | Description   |
| -------- |:------ |:-------- |:------------- |
| currency | string | Yes      | Currency code |

### Responses:


| Code    | Type                              | Description            |
| ------- |:--------------------------------- |:---------------------- |
| 200     | [Exchange Rates](#Exchange-Rates) | Success                |
| 400     | [Error](#Error)                   | Bad request            |
| default | [Error](#Error)                   | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/exchange_rates?currency=BTC'

//Result
{
  "rates": {
    "BTC":   "0.020903",
    "DASH":  "0.3338",
    "USD":   "241.81",
    "WAVES": "29.874"
  }
}
```

## Current balance

```
GET /balance
```

Returns an object of current balances for currencies.

### Parameters: 
None

### Responses:


| Code    | Type                | Description            |
| ------- |:------------------- |:---------------------- |
| 200     | [Balance](#Balance) | Success                |
| 400     | [Error](#Error)     | Bad request            |
| default | [Error](#Error)     | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/balance'

//Result
{
  "balance": {
    "USD": 10000
}
```
   
Object with amounts for every available currency.

## New transaction

```
POST /create_transaction
```

Creates a new transaction.

### Parameters:
| Name         | Type   | Required | Description                                                                           |
|:------------ |:------ |:-------- |:------------------------------------------------------------------------------------- |
| id           | int    | Yes      | Transaction id. If not defined, the `ref` parameter will be used                      |
| ref          | int    | No       | Merchant specific data. If not defined, the `id`**_UnixTimestamp** input will be used |
| currency_in  | string | Yes      | Payment currency of transaction                                                       |
| currency_out | string | Yes      | Payout currency of transaction                                                        |
| amount_in    | float  | Yes      | Amount of payment currency of transaction                                             |
| callback_url | string | No       | [Redirect URL](#Callback-URL) after completed transaction                             |

### Responses:


| Code    | Type                                    | Description            |
| ------- |:--------------------------------------- |:---------------------- |
| 200     | [Transaction Short](#Transaction-Short) | Success                |
| 400     | [Error](#Error)                         | Bad request            |
| default | [Error](#Error)                         | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/create_transaction' -d '{ "ref": 125, "currency_in": "USD", "currency_out": "BTC", "amount_in": 100 }'

//Result
{
  "amount_out": 0.041896,
  "currency_out": "BTC",
  "id": 3,
  "qr_code": "bitcoin:38iub2TZpsTGQjZc7zhGcBcphxPk6eGpHa?amount=0.041896",
  "rate": 0.00041896,
  "address": "38iub2TZpsTGQjZc7zhGcBcphxPk6eGpHa",
  "note": "Please turn off transaction encryption if you encounter public key error"
}
```

## Cancel transaction

```
POST /cancel_transaction
```

Manually cancels a pending transaction.

### Parameters:
| Name | Type | Required | Description    |
|:---- |:---- |:-------- |:-------------- |
| id   | int  | Yes      | Transaction id |

### Responses:


| Code    | Type                                      | Description            |
| ------- |:----------------------------------------- |:---------------------- |
| 200     | [Transaction Status](#Transaction-Status) | Success                |
| 400     | [Error](#Error)                           | Bad request            |
| default | [Error](#Error)                           | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/cancel_transaction' -d '{ "id": 9 }'

//Result
{
  "status": "cancelled",
  "status_description": "Transaction has been cancelled"
}
```

## Chargeback transaction

```
POST /chargeback_transaction
```

Requests chargeback for a transaction.

### Parameters:
| Name | Type | Required | Description    |
|:---- |:---- |:-------- |:-------------- |
| id   | int  | Yes      | Transaction id |

### Responses:


| Code    | Type                                      | Description            |
| ------- |:----------------------------------------- |:---------------------- |
| 200     | [Transaction Status](#Transaction-Status) | Success                |
| 400     | [Error](#Error)                           | Bad request            |
| default | [Error](#Error)                           | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/chargeback_transaction' -d '{ "id": 3 }'

//Result
{
  "status": "chargeback_scheduled",
  "status_description": "Transaction has been scheduled for chargeback"
}
```

## Transaction details

```
GET /transaction
```

Returns details for a single transaction.

### Parameters:
| Name     | Type | Required | Description    |
|:-------- |:---- |:-------- |:-------------- |
| id | int  | Yes      | Transaction id |

### Responses:


| Code    | Type                                  | Description            |
| ------- |:------------------------------------- |:---------------------- |
| 200     | [Transaction Full](#Transaction-Full) | Success                |
| 400     | [Error](#Error)                       | Bad request            |
| 404     |                                       | Not found              |
| default | [Error](#Error)                       | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/transaction?id=1'

//Result
{
  "transaction": {
    "address": "33CyuJsTYQ3h6kPkDPT1Mawx7qZouVzmHe",
    "amount_in": "100",
    "amount_out": "0.041896",
    "comment": "Requested chargeback",
    "created": "2017-05-24 15:12:39",
    "currency_in": "USD",
    "currency_out": "BTC",
    "id": 1,
    "rate": "0.00041896",
    "ref": "CK00004",
    "status": "cancellation",
    "updated": "2017-05-24 16:34:24",
    "qr_code": "bitcoin:2N1sNUrHUmMw61rSyFPPmvDYHJrCk7QCy8x?amount=0.0000000511751",
    "note": "Please turn off transaction encryption if you encounter public key error"
   }
}
```

## List of transactions

```
GET /transactions
```

Returns a list of transactions.

### Parameters:
| Name     | Type   | Required | Description                                                                                                                      |
|:-------- |:------ |:-------- |:-------------------------------------------------------------------------------------------------------------------------------- |
| status   | string | No       | Transaction status. Allowed values: [new, pending, confirmation, cancellation, success, canceled, failure, chargeback, timeout] |
| limit    | int    | No       | Default 50; max 100                                                                                                              |
| offset   | int    | No       | Start with 0; default 0                                                                                                          |
| order_by | string | No       | Sort order. Allowed values: [id, status, updated, created, id, ref]                                                              |

### Responses:


| Code    | Type                                    | Description            |
| ------- |:--------------------------------------- |:---------------------- |
| 200     | [[Transaction Full](#Transaction-Full)] | Success                |
| 400     | [Error](#Error)                         | Bad request            |
| default | [Error](#Error)                         | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/transactions?order_by=-updated'

//Result
{
  "transactions": [
      {
        "address": "33CyuJsTYQ3h6kPkDPT1Mawx7qZouVzmHe",
        "amount_in": "100",
        "amount_out": "0.041896",
        "comment": "Requested chargeback",
        "created": "2017-05-24 15:12:39",
        "currency_in": "USD",
        "currency_out": "BTC",
        "id": 1,
        "rate": "0.00041896",
        "ref": "CK00004",
        "status": "cancellation",
        "updated": "2017-05-24 16:34:24",
        "qr_code": "bitcoin:2N1sNUrHUmMw61rSyFPPmvDYHJrCk7QCy8x?amount=0.0000000511751",
        "note": "Please turn off transaction encryption if you encounter public key error"
      },
      {
        "address": "3DahmyivDiKeAo67FREygXJEZgD5G4q96u",
        "amount_in": "100",
        "amount_out": "0.041896",
        "comment": "Payment received",
        "created": "2017-05-24 15:13:11",
        "currency_in": "USD",
        "currency_out": "BTC",
        "id": 2,
        "rate": "0.00041896",
        "ref": "CK00006",
        "status": "success",
        "updated": "2017-05-24 16:34:24",
        "qr_code": "bitcoin:2N1sNUrHUmMw61rSyFPPmvDYHJrCk7QCy8x?amount=0.0000000511751",
        "note": "Please turn off transaction encryption if you encounter public key error"
      }
   ]
}
```

## Transaction broadcast

```
POST /broadcast_transaction
```

Broadcasts a transaction.

### Parameters:
| Name     | Type   | Required | Description               |
|:-------- |:------ |:-------- |:------------------------- |
| currency | string | Yes      | Transaction currency code |
| txid     | string | Yes      | Transaction id            |
| receiver | string | Yes      | Receiver address          |
| amount   | string | Yes      | Transaction amount        |

### Responses:


| Code    | Type                              | Description            |
| ------- |:--------------------------------- |:---------------------- |
| 200     | [Broadcast Code](#Broadcast-Code) | Success                |
| 400     | [Error](#Error)                   | Bad request            |
| default | [Error](#Error)                   | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/broadcast_transaction' -d '{"currency": "BTC", "txid": "f39448872b469a6f49b7d8b037adf810519f1f2b583cba852e7f5128f53daf29", "receiver": "1ApkXfxWgJ5CBHzrogVSKz23umMZ32wvNA", "amount": 0.07227808}'

//Result
{
  "success": 1
}
```

## Product details

```
GET /product
```
Returns an object with product details.

### Parameters:
| Name | Type | Required | Description             |
|:---- |:---- |:-------- |:----------------------- |
| id   | int  | Yes      | Internal transaction id |

### Responses:


| Code    | Type                | Description            |
| ------- |:------------------- |:---------------------- |
| 200     | [Product](#Product) | Success                |
| 400     | [Error](#Error)     | Bad request            |
| 404     |                     | Not found              |
| default | [Error](#Error)     | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/product?id=1'

//Result
{
  "product": {
    "id": 1,
    "amount": "5.00",
    "currency": "USD",
    "title": "Croissant",
    "unit": "piece"
    "fields": [],
    "callback_url": "",
    "tx_success": 7,
    "custom_css": "https://somesite.com/css/style.css",
  }
}
```

## New product

```
POST /create_product
```
Creates a new product.

### Parameters:
| Name | Type | Required | Description             |
|:---- |:---- |:-------- |:----------------------- |
| id   | int  | Yes      | Internal transaction id |

### Responses:


| Code    | Type                | Description            |
| ------- |:------------------- |:---------------------- |
| 200     | [Product](#Product) | Success                |
| default | [Error](#Error)     | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/create_product' -d '{ "title": "Pierogi", "amount": 15, "currency": "UAH", "unit": "piece", "fields": [ { "id": "comment", "title": "Comment", "is_required": 0, "type": "text", "custom_css": "is_optional" } ] }'

//Result
{
  "id": 12
}
```
## Update product

```
PUT /product/{id}
```
Updates product properties.

### Parameters:
| Name | Type | Required | Description         |
|:---- |:---- |:-------- |:------------------- |
| id   | int  | Yes      | Internal product id |

### Responses:


| Code    | Type                              | Description            |
| ------- |:--------------------------------- |:---------------------- |
| 200     | [Product Status](#Product-Status) | Success                |
| 400     | [Error](#Error)                   | Bad request            |
| default | [Error](#Error)                   | Generic response error |

### Example curl:

``` javascript
//Request:
curl 'https://username:password@app.paytomat.com/api/v1/product/12' -X PUT -d '{ "amount": 20 }'

//Result
{
  "updated": 1
}
```

## Payment widget

```
GET /payment_url
```
Returns URL to the merchant's payment widget.

### Parameters:
None

### Responses:


| Code    | Type                              | Description            |
| ------- |:--------------------------------- |:---------------------- |
| 200     | [Product Status](#Product-Status) | Success                |
| 400     | [Error](#Error)                   | Bad request            |
| default | [Error](#Error)                   | Generic response error |

### Example curl:

``` javascript
//Request:
curl curl 'https://username:password@app.paytomat.com/api/v1/payment_url'

//Result
{
  "url": "https://app.paytomat.com/pay/2mVQcpFLk9f"
}
```   
    
# Models:
## General Models
### JWT
Represents a [JSON Web Token](https://jwt.io) used for authentication to Paytomat Console Panel API. You can generate a new token or find an existing one in [Console Panel](http://app.paytomat.com).

| Name  | Type   | Description | Example |
| ----- |:------ |:----------- |:------- |
| token | string | JWT token   |         |

### Error
Contains details about the encountered error during an API request. You can learn more about common types of errors in the [Error Codes](#Error-Codes) section.

| Name | Type | Description | Example |
| ---- |:---- |:----------- |:------- |
| code | long | Error code  | 404     |


### Currency
Represents currency or cryptocurrency used in a given transaction. Currencies can be used to perform payments (invoicing system for online, mobile or in-store purchases) and payouts (merchant fund’s settlement to a bank account or cryptocurrency wallet).

| Name  | Type    | Description                                                                                                                                                         | Example   |
| ----- |:------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------- |
| code  | string  | Currency code by country ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) or cryptocurrency code ([Coinmarketcap](https://coinmarketcap.com/all/views/all/))    | USD       |
| in    | boolean | Is the currency allowed for payments                                                                                                                                | true      |
| out   | boolean | Is the currency allowed for payouts                                                                                                                   | false     |
| title | string  | Full name of currency by country ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) or cryptocurrency ([Coinmarketcap](https://coinmarketcap.com/all/views/all/)) | US dollar |

### Exchange Rates
Contains a key-value pair with a currency code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) on the left side and exchange rate on the right for a given currency. 

| Name  | Type   | Description                        | Example |
| ----- |:------ |:---------------------------------- |:------- |
| rates | object | Exchange rates for chosen currency |         |

### Balance
Contains current balances of each [currency](#Currency) for a given merchant account. Current balance is a sum of all transactions received in this currency before it was settled.

| Name    | Type   | Description                          | Example |
| ------- |:------ |:------------------------------------ |:------- |
| balance | object | Amounts for all available currencies |         |

### Payment URL
Represents a unique link each merchant can use to accept cryptocurrency payments via [mQR standard](https://paytomat.com/en) created by Paytomat. Contains a key-value pair with `url` on the left side and the link itself on the right.

| Name   | Type   | Description                      | Example |
| ------ |:------ |:-------------------------------- |:------- |
| object | object | URL to merchant's payment widget |         |

## Transaction Models
### Transaction Short
Contains details of a newly created transaction.

| Name         | Type   | Description                                 | Example    |
| ------------ |:------ |:------------------------------------------- |:---------- |
| id           | int    | Internal transaction id                     | 87         |
| rate         | float  | Exchange rate of a given currency           | 0.00041896 |
| currency_out | string | Payout currency of transaction              | BTC        |
| amount_out   | float  | Amount of payout currency of transaction    | 0.041896   |
| qr_code      | string | Transaction URL used for QR code generation |            |
| address      | string | Address to receive payout currency          |            |
| note         | string | Extra details about transaction             |            |

### Transaction Full
Contains full details of the already created transaction. 

| Name         | Type     | Description                                               | Example    |
| ------------ |:-------- |:--------------------------------------------------------- | ---------- |
| id           | int      | Internal transaction id                                   | 456        |
| ref          | string   | Merchant's specific data                                  |            |
| status       | string   | Transaction status                                        | pending    |
| comment      | string   | Comment to transaction status                             |            |
| created      | dateTime | Data/time of transaction creation                         |            |
| updated      | dateTime | Data/time of the latest transaction update                |            |
| address      | string   | Address to receive payout currency                        |            |
| currency_in  | string   | Payment currency of transaction                           | BTC        |
| currency_out | string   | Payout currency of transaction                            | LTC        |
| amount_in    | float    | Amount of payment currency of transaction                 | 1.872000   |
| rate         | float    | Exchange rate of a given currency                         | 0.00041896 |
| qr_code      | string   | Transaction URL used for QR code generation               |            |
| note         | string   | Extra details about transaction                           |            |
| callback_url | string   | [Redirect URL](#Callback-URL) after completed transaction |            |
| product_id   | int      | Product id (if a transaction is attached to a product)    |            |

### Transaction Status
Represents transaction status with its name and full description. 

| Name               | Type   | Description        | Example                        |
| ------------------ |:------ |:------------------ |:------------------------------ |
| status             | string | Action status      | canceled |
| status_description | string | Status description | Transaction has been canceled |


### Callback URL
Represents a postback structure of the URL to post after a transaction is completed.

| Name        | Type   | Description                                                                                                                      | Example |
| ----------- |:------ |:-------------------------------------------------------------------------------------------------------------------------------- |:------- |
| merchant_id | int    | Merchant id                                                                                                                      | 87      |
| product_id  | int    | Product id                                                                                                                       | 627     |
| tx_code     | string | Internal transaction code                                                                                                        |         |
| tx_id       | string | Transaction id on a blockchain                                                                                                   |         |
| amount      | float  | Amount of funds sent in transaction                                                                                              | 2.345   |
| currency    | string | Currency code of sent transaction                                                                                                | ETH     |
| qr_code     | string | Transaction URL used for QR code generation                                                                                      |         |
| details     | string | Extra details about transaction                                                                                                  |         |
| tx_status   | string | Transaction status. Allowed values: [new, pending, confirmation, cancellation, success, canceled, failure, chargeback, timeout] | pending |
| custom_css  | string | A link for CSS file or CSS properties used for customizing transaction's UI                                                      |         |

### Broadcast Code
Represents a success code of the broadcasted transaction. Contains a key-value object with `success` key on the left side and success code on the right (`1` for successful, `0` for not failed operation respectively).

| Name   | Type   | Description    | Example |
| ------ |:------ |:-------------- |:------- |
| object | object | Broadcast code |         |

## Product Models
### Product
Represents a product that is intended to be sold repeatedly or in bulk. You can create a product inside of [Paytomat Console Panel](http://app.paytomat.com).

| Name         | Type                              | Description                                                                                                                                                              | Example     |
| ------------ |:--------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:----------- |
| id           | int                               | Internal product id                                                                                                                                                      | 123         |
| amount       | decimal                           | Product price                                                                                                                                                            | "13.83903987" |
| currency     | string                            | Price currency code                                                                                                                                                      | USD         |
| title        | string                            | Product title                                                                                                                                                            |             |
| tx_success   | int                               | Number of successful transactions for this product                                                                                                                       |             |
| unit         | string                            | Allowed values: [single, piece, decimal]. Single - fixed number of products to buy; piece - products can be sold partially; decimal - any amount of products can be sold |             |
| callback_url | string                            | Redirect URL used after successful transaction                                                                                                                           |             |
| custom_css   | string                            | A link to CSS file or CSS properties used for customizing transaction's UI                                                                                               |             |
| fields       | [[Product Field](#Product-Field)] | Array of objects describing product fields                                                                                                                               |             |

### Product Field
Represents specific property data of the product, such as its shipping address, origin, brand, manufacturer, category, etc.

| Name        | Type   | Description                              | Example          |
| ----------- |:------ |:---------------------------------------- |:---------------- |
| id          | string | Field id                                 | shipping_address |
| title       | string | Field title                              | Shipping Address |
| type        | string | Field type                               | text             |
| min_length  | int    | Min length of the field                  | 10               |
| max_length  | int    | Max length of the field                  | 42               |
| is_required | int    | Is field required. Allowed values: [0,1] | 1                |
| options     | string | Extra options for a field                |                  |

### Product Status
Represents a flag of either the product was updated or not. Contains a key-value pair with `updated` key on the left side and updated status on the right (`1` for updated, `0` for not updated respectively). 

| Name   | Type   | Description                | Example |
| ------ |:------ |:-------------------------- |:------- |
| object | object | Update status of a product |         |
