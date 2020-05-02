
const localStorageKeyPrefix = "silberneimer/pages:";
const localStorageKey = {
    amazonAccountId: localStorageKeyPrefix + "amazonAccountId",
    amazonAccountPassword: localStorageKeyPrefix + "amazonAccountPassword"
};

// Amazon Account Id

export function amazonAccountId(): string | null {
    return localStorage.getItem(localStorageKey.amazonAccountId)
}

export function setAmazonAccountId(amazonId: string) {
    localStorage.setItem(localStorageKey.amazonAccountId, amazonId)
}

// Amazon Account Password

export function amazonAccountPassword(): string | null {
    return localStorage.getItem(localStorageKey.amazonAccountPassword)
}

export function setAmazonAccountPassword(amazonAccountPassword: string) {
    localStorage.setItem(localStorageKey.amazonAccountPassword, amazonAccountPassword)
}
