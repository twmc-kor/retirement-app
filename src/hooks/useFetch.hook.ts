import { useEffect, useState } from 'react';
import { IPost } from '../models';

const baseUrl = 'https://us-central1-enoveh-toy.cloudfunctions.net';

/**
 * 게시물 조회 API 훅
 */
export function useFetchPosts() {
    const [posts, setPosts] = useState<IPost[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${baseUrl}/posts`)
            .then((res) => res.json())
            .then((json) => {
                const { posts } = json;
                if (posts) {
                    setPosts(posts);
                    setLoading(false);
                }
            });
    }, []);

    return [posts, loading] as const;
}

export const AddPostInputName = {
    MESSAGE: 'MESSAGE',
    NICKNAME: 'NICKNAME',
} as const;

export function useAddPost(imageType: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');

    const handleChangeText = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === AddPostInputName.MESSAGE) {
            return setMessage(value);
        }

        return setNickname(value);
    };

    const clearError = () => {
        setError(false);
    };

    const bodyData = {
        nickname: nickname,
        message: message,
        imageType: imageType,
    };

    const commit = (): Promise<void> => {
        setLoading(true);
        if (!imageType) {
            return Promise.reject(() =>
                console.error('올바르지 않은 접근입니다.'),
            );
        }

        return fetch(`${baseUrl}/addPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.error) {
                    setLoading(false);
                    setError(true);
                    throw new Error(json.error);
                }

                setLoading(false);
            });
    };

    return {
        message,
        nickname,
        loading,
        error,
        clearError,
        commit,
        handleChangeText,
    };
}
