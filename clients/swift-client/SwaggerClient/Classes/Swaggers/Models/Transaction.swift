//
// Transaction.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class Transaction: JSONEncodable {

    public var amount: Double?
public var origin: AccountID?
public var destination: AccountID?
public var executedAt: NSDate?

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["amount"] = self.amount
        nillableDictionary["origin"] = self.origin?.encodeToJSON()
        nillableDictionary["destination"] = self.destination?.encodeToJSON()
        nillableDictionary["executedAt"] = self.executedAt?.encodeToJSON()
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
