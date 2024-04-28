/// This module defines a minimal Coin and Balance.
module proc_creature::creature {
    use std::string::{Self, String};

    /// Address of the owner of this module
    const MODULE_OWNER: address = @proc_creature;

    /// Error codes
    const ENOT_MODULE_OWNER: u64 = 0;
    const EINSUFFICIENT_BALANCE: u64 = 1;
    const EALREADY_HAS_BOOK: u64 = 2;
    const ENOT_INITIALIZED: u64 = 3;
    const ENO_BOOK: u64 = 4;

    struct Creature has key, store {
        gene: String,
    }

    fun init_module(sender: &signer) {
        move_to(sender, Creature {
            gene: string::utf8(b"abc"),
        });
    }

    #[view]
    public fun get_gene(): String acquires Creature {
        let c = borrow_global<Creature>(MODULE_OWNER);
        c.gene
    }
}
