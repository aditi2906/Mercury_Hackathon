pub contract ExampleNFT {

    pub resource NFT {

        pub let id: UInt64

        pub let ipfs_link: String

        init(initID: UInt64, ipfs_link:String) {
            self.id = initID
            self.ipfs_link = ipfs_link
        }
    }

    pub resource interface NFTReceiver {

        pub fun deposit(token: @NFT)

        pub fun getIDs(): [UInt64]

        pub fun idExists(id: UInt64): Bool
    }

    pub resource Collection: NFTReceiver {
        pub var ownedNFTs: @{UInt64: NFT}

        init () {
            self.ownedNFTs <- {}
        }

        pub fun withdraw(withdrawID: UInt64): @NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID)!

            return <-token
        }

        pub fun deposit(token: @NFT) {
            self.ownedNFTs[token.id] <-! token
        }

        pub fun idExists(id: UInt64): Bool {
            return self.ownedNFTs[id] != nil
        }

        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        destroy() {
            destroy self.ownedNFTs
        }
    }

    pub fun createEmptyCollection(): @Collection {
        return <- create Collection()
    }

    pub resource NFTMinter {

        pub var idCount: UInt64

        init() {
            self.idCount = 1
        }

        pub fun mintNFT(ipfs_link:String ): @NFT {

            var newNFT <- create NFT(initID: self.idCount, ipfs_link:ipfs_link)

            self.idCount = self.idCount + 1 as UInt64
            
            return <-newNFT
        }
    }

	init() {
        self.account.save(<-self.createEmptyCollection(), to: /storage/NFTCollection)

        self.account.link<&{NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)

        self.account.save(<-create NFTMinter(), to: /storage/NFTMinter)
	}
}
 
