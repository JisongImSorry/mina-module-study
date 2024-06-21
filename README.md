# Mina Protocol Onboarding Module Study LOG

By: Jiwoong Song (jisongimsorry@gmail.com)

tel: @Hoichate

## Week1

o1js -> using React to study o1js

```
import { Field, Poseidon, PrivateKey, PublicKey, Signature } from 'o1js'

export const useZK = () => {
  const hash = (value: Field) => {
    return Poseidon.hash([value])
  }

  const createPrivateKey = () => {
    return PrivateKey.random()
  }

  return { hash, createPrivateKey }
}
```

tried to create a hook using o1js's basic hash feature.

o1js Field -> Basic number storage. can store up to 256 bits in size (such as uint256)

has other primitives such as Boolean and int32, int64

has signature and private / public key retrieving function

can create private key and create a signature from it, and also verify it

```
1. PrivateKey.random()
2. Signature.create(privateKey, msg)
3. verify(pubKey, msg)
```

has assert equal functions

-> useful in cryptography related projects, such as credit card data enc / dec
