# Mina Protocol Onboarding Module Study LOG

By: Jiwoong Song (jisongimsorry@gmail.com)

tel: @Hoichate

## Week2

Symmetric vs. Asymmetric

If you use only ONE Key -> Symmetric

    Encrypt and Decrypt using the same key (AES)

If you use TWO Keys -> Asymmetric

    Encrypt with Private Key (Signing)

    Decrypt using Public Key

Hash -> SHA256

    Transforms a given string to fixed-size output!

    in O1JS, Poseidon does this feature for us

Digital Signature

    Very important in blockchain!

    Used very popularly through ETH based chains

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
