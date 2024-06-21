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
