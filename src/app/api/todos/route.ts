import { NextResponse } from "next/server";

export function GET() {
    const data = {
        name: "ali",
        age: 30
    };

    if (data.age > 18) {
        const responseData = [1, 2, 3, 4];
        return NextResponse.json({ success: true, data: responseData });
    }

    return NextResponse.json({ success: false, message: "Age is below 18." });
}

export function POST() {
    const data = "hello from POST api";
    return NextResponse.json({ success: true, data });
}

export function PATCH() {
    const data = "hello from PATCH api";
    return NextResponse.json({ success: true, data });
}

export function DELETE() {
    const data = "hello from DELETE api";
    return NextResponse.json({ success: true, data });
}
