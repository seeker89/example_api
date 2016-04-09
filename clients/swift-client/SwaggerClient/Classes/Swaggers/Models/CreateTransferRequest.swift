//
// CreateTransferRequest.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class CreateTransferRequest: JSONEncodable {

    public var amount: Double?
public var origin: AccountID?
public var destination: AccountID?

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["amount"] = self.amount
        nillableDictionary["origin"] = self.origin?.encodeToJSON()
        nillableDictionary["destination"] = self.destination?.encodeToJSON()
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}