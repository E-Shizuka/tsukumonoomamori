import React, { useState } from "react";

function yesChecked() {
    // はいといいえの選択状態を管理する状態変数を作成
    const [yesChecked, setYesChecked] = useState(true);
    const [noChecked, setNoChecked] = useState(false);

    // チェックボックスの変更ハンドラを定義
    const handleYesChange = () => {
        setYesChecked(true);
        setNoChecked(false);
    };

    const handleNoChange = () => {
        setYesChecked(false);
        setNoChecked(true);
    };

    return (
        <div>
            はい
            <input
                type="checkbox"
                checked={yesChecked}
                onChange={handleYesChange}
                className="checkbox"
                name="photo_privacy"
                value="0"
            />
            いいえ
            <input
                type="checkbox"
                checked={noChecked}
                onChange={handleNoChange}
                className="checkbox"
                name="photo_privacy"
                value="1"
            />
        </div>
    );
}

export default yesChecked;
