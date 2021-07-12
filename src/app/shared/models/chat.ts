export interface MessageModel {
    id: String,
    to: String,
    key: String,
    from: String,
    type: String,
    content: String,
    size: number,
    isGroupMessage: Boolean,
    status: number,
    date: number,
}

export interface receiptModel {
    receiptType: number,
    key: String,
    messageId: String,
    date: number,
    from: String,
    to: String,
}

export interface fileModel {
    id: String,
    from: String,
    topic: String,
    key: String,
    type: String,
    date: number
}

export interface onlineOfflineModel {
    channel: String,
    event: String,
    time: number,
    who: any
}

export interface typingModel {
    content: String
    date: number
    from: String,
    id: String,
    isGroupMessage: false
    key: String,
    size: 0
    status: 0
    to: String,
    type: "typing"
}

