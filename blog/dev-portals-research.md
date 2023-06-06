---
title: Dev Portals Research
tags: [tech writing, web3]
image: /img/blog/dev-portals.png
---

## Goals
- Explore principles behind the best dev portals in the fintech industry.
- Find patterns that can be used to build a new dev portal or significantly improve the existing one.
- Look for uncommon things to implement in a fresh dev portal.

## Participants (66)

The participants of research include dev portals, API documentation, etc. of big companies and fintech/blockchain industries:
- Crypto Exchanges: [Binance](https://github.com/binance-exchange/binance-official-api-docs), [Coinbase Pro](https://developers.coinbase.com), [Kraken](https://docs.kraken.com/websockets), [Bitmex](https://www.bitmex.com/app/apiOverview), [Huobi](https://huobiapi.github.io/docs/spot/v1/en/#change-log), [OKex](https://www.okex.com/docs/en/#README), [Upbit](https://beta-docs.upbit.com/reference#overall-account-inquiry), [Bitfinex](https://docs.bitfinex.com/docs), [HitBTC](https://api.hitbtc.com/), [ZB.com](https://www.zb.com/api), [Bittrex](https://bittrex.github.io/api/v1-1).
- Blockchains: [Binance Chain](https://docs.binance.org/index.html), [Libra](https://developers.libra.org), [Dash](https://docs.dash.org/en/stable/index.html), [Klaytn](https://docs.klaytn.com/), [Ethereum](https://ethereum.org/developers/#getting-started), [EOSIO](https://developers.eos.io/).
- Crypto Wallets: [Coinbase](https://developers.coinbase.com/api/v2), [Trezor](https://wiki.trezor.io/Developers_guide), [Ledger](https://ledger.readthedocs.io/en/latest/index.html), [Electrum](https://electrum.readthedocs.io/en/latest/index.html), [Copay](https://github.com/bitpay/copay), [Blockchain.info](https://www.blockchain.com/uk/api/blockchain_wallet_api), [Parity](https://wiki.parity.io), [imToken](https://docs.token.im/), [MetaMask](https://docs.metamask.io/guide/getting-started.html#basic-considerations).
- DeFi: [ChainLink](https://docs.chain.link), [Ox](https://0x.org/docs), [MakerDAO](https://docs.makerdao.com), [Matic](https://docs.matic.network), [Kyber Network](https://developer.kyber.network/docs/Start/), [Uniswap](https://docs.uniswap.io), [Synthetics](https://developer.synthetix.io), [Compound](https://compound.finance/developers), [Iconomi](https://www.iconomi.com/api-docs#section/General-information/Versioning), [Polymath](https://developers.polymath.network/docs/doc1.html), [Aave](https://developers.aave.com), [DeFiZap](https://defizap.gitbook.io/docs), [IDEX](https://docs.idex.market), [Bancor](https://docs.bancor.network/).
- E-wallets/Payment Gateways: [WeChat](https://pay.weixin.qq.com/index.php/public/wechatpay_en/developers), [Alipay](https://intl.alipay.com/doc/gr/hx6vzr), [Paytm](https://developer.paytm.com/docs/), [Omise](https://www.omise.co/docs), [Stripe](https://stripe.com/docs/js), [Bitgo](https://www.bitgo.com/api/v2), [Square](https://developer.squareup.com/us), [Maybank QR Pay](https://m2upay.maybank2u.com.my/assets/sdk/index.html#introduction), [Zalo Pay](https://developers.zalo.me/), [Grab Pay](https://docs.adyen.com/payment-methods/grabpay), [Google Pay](https://developers.google.com/pay/api), [Ingenico ePayments](https://epayments.developer-ingenico.com/), [Apple Pay](https://developer.apple.com/apple-pay/), [Samsung Pay](https://pay.samsung.com/developers), [Paypal](https://developer.paypal.com/docs/), [Revolut](https://developer.revolut.com).
- Stock Exchanges (or services that can provide data from them): [NASDAQ](https://dataondemand.nasdaq.com/docs/), [Alpha Vantage](https://www.alphavantage.co/documentation), [UniBit](https://unibit.ai/api/docs/V2.0/introduction), [Quandl](https://docs.quandl.com/), [Deutsche Bourse](https://docs.developer.deutsche-boerse.com/#/).
- GAFAM: [Google](https://developers.google.com), [Amazon](https://developer.amazon.com), [Facebook](https://developers.facebook.com), [Apple](https://developer.apple.com/), [Microsoft](https://developer.microsoft.com).


## Documentation

### Patterns

- Explanation on what the product or network can do (capabilities, functionalities). Samples: [Coinbase Pro](https://developers.coinbase.com), [Binance Chain](https://docs.binance.org/guides/intro.html).
- Security best practices. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/coinbase-connect/security-best-practices), [Omise](https://www.omise.co/security-best-practices), [Ledger](https://ledger.readthedocs.io/en/latest/additional/security_guidelines.html).
- Guides include code samples, instead of user UI walkthrough. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/guides/send-receive), [Binance Chain](https://docs.binance.org/guides/create-address.html), [Trezor](https://wiki.trezor.io/User_manual:Running_a_local_instance_of_Trezor_Wallet_backend_(Blockbook)), [Ledger](https://ledger.readthedocs.io/en/latest/userspace/getting_started.html), [Electrum](https://electrum.readthedocs.io/en/latest/merchant.html), [Instagram](https://developers.facebook.com/docs/instagram-api/getting-started), [Microsoft](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query-ssms).

![](https://i.imgur.com/6EqBYzE.png)
*[Binance Chain](https://docs.binance.org/guides/create-address.html)*

- Code samples in guides include `Example output` and explain `What's happening` in a short paragraph, instead of a step-by-step process. Sample: [Dash](https://dashplatform.readme.io/docs/tutorial-create-and-fund-a-wallet), [Libra](https://developers.libra.org/docs/my-first-transaction).

![](https://i.imgur.com/faS4hHj.png)
*[Dash](https://dashplatform.readme.io/docs/tutorial-create-and-fund-a-wallet)*

- If this is a blockchain, there's a guide on how to set up your own node. Samples: [Binance Chain](https://docs.binance.org/guides/node/install.html), [Libra](https://developers.libra.org/docs/run-local-network), [ChainLink](https://docs.chain.link/docs/running-a-chainlink-node).
- Each smart contract is described in details, including intro, the purpose of all functions, reference to Github, etc. Sample: [MakerDAO](https://docs.makerdao.com/smart-contract-modules/collateral-module/join-detailed-documentation), [Synthtics](https://developer.synthetix.io/contracts/proxy), [Compound](https://compound.finance/developers/ctokens), [Bancor](https://docs.bancor.network/api-reference/ethereum-smart-contracts/bancornetwork).

![](https://i.imgur.com/YlMuBGp.png)
*[MakerDAO](https://docs.makerdao.com/smart-contract-modules/collateral-module/join-detailed-documentation)*

![](https://i.imgur.com/B3MpDSE.png)
*[Kyber Network](https://developer.kyber.network/docs/APIABI-KyberNetwork)*

- Build your first app. Sample: [Matic](https://docs.matic.network/docs/develop/remix), [Amazon AWS](https://aws.amazon.com/getting-started/projects/build-modern-app-fargate-lambda-dynamodb-python), [Android](https://developer.android.com/training/basics/firstapp), [Microsoft](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-3.1&tabs=visual-studio).

![](https://i.imgur.com/0ckHkaU.png)
*[Amazon AWS](https://aws.amazon.com/getting-started/projects/build-modern-app-fargate-lambda-dynamodb-python)*

- Clear structure of content for SDK explanation. Samples: [Paytm](https://developer.paytm.com/docs/server-sdk/node/), [Square](https://developer.squareup.com/docs/in-app-payments-sdk/build-on-android), [Zalo Pay](https://developers.zalo.me/docs), [Google Pay](https://developers.google.com/pay/api/android/guides/tutorial), [Facebook](https://developers.facebook.com/docs/business-sdk/common-scenarios/page-management).

![](https://i.imgur.com/QrJYAI1.png)
*[Square](https://developer.squareup.com/docs/in-app-payments-sdk/build-on-android)*

### Uncommon/Cool Things

- A list of official and community libraries. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/client-libraries).
- Notifications for updates or usage of certain API endpoints. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/notifications). 
- Guides include the level of difficulty. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/guides/send-receive), [0x](https://0x.org/docs/guides).
- Licenses for all open-source software. Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/licenses).
- Developer Agreement (Terms). Samples: [Coinbase Pro](https://developers.coinbase.com/docs/wallet/terms/2), [Bitfinex](https://www.bitfinex.com/legal/api_terms).
- Highlights on specific parts of the app/website. Samples: [Binance Chain](https://docs.binance.org/guides/trading-interface.html), [Klatn](https://docs.klaytn.com/bapp/developer-tools/klaytn-wallet), [Facebook](https://developers.facebook.com/docs/facebook-login/review).

![](https://i.imgur.com/ToFaV5Y.png)
*[Binance Chain](https://docs.binance.org/guides/trading-interface.html)*

![](https://gblobscdn.gitbook.com/assets%2F-L_tOQ0x4-szpVU0FZV4%2F-LiI-t3sEEEUbKUpJ9vI%2F-LiI-vJ8Dozlg2i7fvV-%2F05-addtoken-4.png?generation=1561539624474490&alt=media)
*[Klaytn](https://docs.klaytn.com/bapp/developer-tools/klaytn-wallet)*

- A separate section for community: [open principles](https://developers.libra.org/docs/libra-open-source-paper), [contribution guide](https://developers.libra.org/docs/community/contributing), [coding guidelines](https://developers.libra.org/docs/community/coding-guidelines), [bug reporting](https://developers.libra.org/docs/policies/security). Samples: [Libra](https://developers.libra.org/docs/community/coding-guidelines).
- The entire payment flow UI is described in 2 paragraphs and 2 images. Instead, the focus is put on the code. Samples: [Omise](https://www.omise.co/pay-with-points).

![](https://cdn.omise.co/assets/screenshots/articles/2017-11-02/pay-with-points/payment_flow.png)
*[Omise](https://www.omise.co/pay-with-points)*

- A single page to explain the entire js library without compromising on an explanation of core features. Samples: [Omise](https://www.omise.co/omise-js), [Stripe](https://stripe.com/docs/js).
- Specific features of this particular blockchain/network (built-in governance, privacy, etc.). Samples: [Dash](https://docs.dash.org/en/stable/introduction/features.html).
- A separate page for wallets that a network has. Samples: [Dash](https://docs.dash.org/en/stable/wallets/index.html).
- A document on how the law applies to the network. Samples: [Dash](https://docs.dash.org/en/stable/legal.html).
- Integration guides for Android and iOS. Samples: [TrustWallet](https://developer.trustwallet.com/wallet-core/integration-guide/wallet-core-usage).
- Every function has a `Logic` explanation where it shows what happens if you execute this particular function. Sample: [0x](https://0x.org/docs/guides/v3-specification#batchfillorkillorders).

![](https://i.imgur.com/fFZxbjq.png)
*[0x](https://0x.org/docs/guides/v3-specification#batchfillorkillorders)*

- A full-stack Dapp (Airbnb). Sample: [Matic](https://docs.matic.network/docs/develop/full-stack-dapp-with-pos).
- Application Binary Interface (ABI). Sample: [Kyber Network](https://developer.kyber.network/docs/API_ABI-ABI/), [Compound](https://compound.finance/developers).

![](https://i.imgur.com/oHnuO3L.png)
*[Kyber Network](https://developer.kyber.network/docs/APIABI-ABI/)*

- A very neat table for network connections. Samples: [Compound](https://compound.finance/developers).

![](https://i.imgur.com/pOQIuF7.png)
*[Compound](https://compound.finance/developers)*

- Security page with smart contract audits, formal verification, economic security, bug bounty program. Samples: [Compound](https://compound.finance/developers/security).

![](https://i.imgur.com/6rCFztH.png)
*[Compound](https://compound.finance/developers/security)*

- Code samples in Solidity and Web3. Samples: [Aave](https://developers.aave.com/?javascript#lendingpool).

![](https://i.imgur.com/0rft9hW.png)
*[Aave](https://developers.aave.com/?javascript#lendingpool)*

- Sequence Chart for payment flow. Samples: [WeChat](https://pay.weixin.qq.com/wiki/doc/api/wxpay/pay/QuickPay/chapter3_2.shtml).

![](https://pay.weixin.qq.com/wiki/doc/api/wxpay/assets/img/common/pay/chapter3_2_3.png)
*[WeChat](https://pay.weixin.qq.com/wiki/doc/api/wxpay/pay/QuickPay/chapter32.shtml)*

- If there are multiple ways to do the same thing (via APIs or Dashboard for instance), it is divided into tabs. Samples: [Paytm](https://developer.paytm.com/docs/refund-management/).

![](https://i.imgur.com/rssWhca.png)

![](https://i.imgur.com/tFUqquy.png)
*[Paytm](https://developer.paytm.com/docs/refund-management/)*

- Cool landing page for SDK that explains the benefits of using this product. Samples: [Square](https://developer.squareup.com/us/en/in-app-payments).
- Integration Checklist. Samples: [Google Pay](https://developers.google.com/pay/api/android/guides/test-and-deploy/integration-checklist).

![](https://i.imgur.com/Mo0vPMG.png)
*[Google Pay](https://developers.google.com/pay/api/android/guides/test-and-deploy/integration-checklist)*

- A good way to explain lifecycles. Samples: [Android](https://developer.android.com/guide/components/activities/activity-lifecycle#kotlin).

![](https://i.imgur.com/X9jXcHV.png)
*[Android](https://developer.android.com/guide/components/activities/activity-lifecycle#kotlin)*

- Getting Started guides for SDKs. Samples: [Facebook](https://developers.facebook.com/docs/business-sdk/getting-started).
- A plugin that shows open and closed Github issues. Samples: [Microsoft](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-single-database-get-started?tabs=azure-portal).

![](https://i.imgur.com/RsimYHU.png)
*[Microsoft](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-single-database-get-started?tabs=azure-portal)*

## API

### Patterns

- Infinite scroll page with auto-expandable hierarchy of document's structure on the left and request/response objects on the right. One of the tools used is [Slate](https://slatedocs.github.io/slate/#introduction). Samples: [Coinbase Pro](https://docs.pro.coinbase.com/?python#introduction), [Stripe](https://stripe.com/docs/api), [Binance](https://docs.binance.org/guides/trading-interface.html), [Huobi](https://huobiapi.github.io/docs/spot/v1/en/#change-log), [OKex](https://www.okex.com/docs/en/#README), [Upbit](https://beta-docs.upbit.com/reference#overall-account-inquiry), [HitBTC](https://api.hitbtc.com/), [ZB.com](https://www.zb.com/api), [Bittrex](https://bittrex.github.io/api/v1-1), [Coinbase Custody](https://docs.custody.coinbase.com/#introduction), [imToken](https://docs.token.im/tokenlon-open-api/en/), [NASDAQ](https://dataondemand.nasdaq.com/docs/).

![](https://i.imgur.com/wBVcJYv.png)
*[Binance](https://docs.binance.org/guides/trading-interface.html)*

- Change Log. Samples: [Binance](https://binance-docs.github.io/apidocs/spot/en/#change-log), [Bitmex](https://www.bitmex.com/app/apiChangelog), [Huobi](https://huobiapi.github.io/docs/spot/v1/en/#change-log), [Bitfinex](https://docs.bitfinex.com/docs/changelog), [Bitgo](https://www.bitgo.com/api/v2)

![](https://i.imgur.com/iTSXlKk.png)
*[Huobi](https://huobiapi.github.io/docs/spot/v1/en/#change-log)*

- Clear examples of requests and response bodies. Samples: [Coinbase Pro](https://docs.pro.coinbase.com/#list-fills).

![](https://i.imgur.com/RmIguHV.png)
*[Coinbase Pro](https://docs.pro.coinbase.com/#list-fills)*

- Code samples for each request in multiple languages. Samples: [Upbit](https://beta-docs.upbit.com/reference#overall-account-inquiry), [Bitfinex](https://docs.bitfinex.com/reference#rest-public-platform-status), [ZB.com](https://www.zb.com/api#ynhteudawmcdtru), [Stripe](https://stripe.com/docs/api/customers/update?lang=php).

![](https://i.imgur.com/InqJq5z.png)
*[Upbit](https://beta-docs.upbit.com/reference#overall-account-inquiry)*

### Uncommon/Cool Things

- Upcoming changes. Samples: [Coinbase Pro](https://docs.pro.coinbase.com/#upcoming-changes).
- A guide on how to read API docs. Samples: [Bitfinex](https://docs.bitfinex.com/docs/ws-reading-the-documentation).
- API uptime. Samples: [Blockchain.info](https://www.blockchain.com/api).
- All APIs and SDKs docs are in one place. Sample: [imToken](https://docs.token.im/tokenlon-open-api/en/).
- There are API endpoints for both mainnet and testnet. Samples: [Binance Chain](https://docs.binance.org/api-reference/dex-api/paths.html).
- Each function explains the use cases where it can be implemented. Samples: [Paytm](https://developer.paytm.com/docs/fetch-payment-options-api/?ref=payments).

![](https://i.imgur.com/GCcw8Tj.png)
*[Paytm](https://developer.paytm.com/docs/fetch-payment-options-api/?ref=payments)*

- Embedded Swagger into dev portal website. Samples: [Amazon](https://developer.amazon.com/docs/app-submission-api/appsubapi-endpoints.html#/).

![](https://i.imgur.com/B4utczg.png)
*[Amazon](https://developer.amazon.com/docs/app-submission-api/appsubapi-endpoints.html#/)*